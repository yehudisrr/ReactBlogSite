import React, { useState, useEffect } from 'react';
import BlogPostWithComments from '../components/BlogPostWithComments';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Home = () => {
    const [blogPost, setBlogPost] = useState({ id: '', title: '', text: '', dateSubmitted: '01/01/0001', comments: [] });
    const { id } = useParams();

    useEffect(() => {
        const getBlogPost = async () => {
            const { data } = await axios.get('/api/blogposts/viewblog', { params: { id } });
            setBlogPost(data);
        }

        getBlogPost();
    }, []);

    return (
        <div>
            <BlogPostWithComments blogPost={blogPost} />
        </div>
    );
}

export default Home;