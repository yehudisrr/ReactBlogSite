import React, { useState, useEffect } from 'react';
import BlogPostWithComments from '../components/BlogPostWithComments';
import axios from 'axios';

const Home = () => {
    const [blogPost, setBlogPost] = useState({ id: '', title: '', text: '', dateSubmitted: '01/01/0001', comments: [] });

    useEffect(() => {
        const getBlogPost = async () => {
            const { data } = await axios.get('/api/blogposts/mostrecent');
            setBlogPost(data);
            console.log(data);
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