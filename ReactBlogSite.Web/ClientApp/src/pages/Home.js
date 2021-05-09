import React, { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    let params = useParams();
    let { pageNumber } = params;

    useEffect(() => {
        const getBlogPosts = async () => {
            const { data } = await axios.get(`/api/blogposts/getall?pagenumber=${pageNumber}`);
            setBlogPosts(data);
        }

        const getTotalPages = async () => {
            const { data } = await axios.get(`/api/blogposts/gettotalpages`);
            setTotalPages(data);
        }

        getBlogPosts();
        getTotalPages();
    }, [pageNumber]);

    if (pageNumber === undefined) {
        pageNumber = 1;
    }
    pageNumber = parseInt(pageNumber);

    return (
        <div>
            <h1>Huds Blog</h1>
            {!!blogPosts && blogPosts.map(blogPost => <BlogPost blogPost={blogPost} key={blogPost.id} />)}
            <ul className="pagination justify-content-center mb-4">
                {pageNumber < totalPages && <li className="page-item">
                    <Link to={`/page/${pageNumber + 1}`} className='nav-link text-light'>
                        <button className='page-link'>Older</button>
                    </Link>
                </li>}
                {pageNumber > 1 && <li className="page-item">
                    <Link to={`/page/${pageNumber - 1}`} className='nav-link text-light'>
                        <button className='page-link'>Newer</button>
                    </Link>
                </li>}
            </ul>
        </div>
    );
}

export default Home;



