import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const BlogPost = ({ blogPost }) => {
    const { id, title, text, dateSubmitted, comments } = blogPost;
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">
                    <Link to={`/viewblog/${id}`}>
                        {title}
                    </Link>
                </h2>
                <p className="card-text">{text.length < 200 ? text : `${text.substring(0, 200)}...`}</p>
                <div className='mb-3'>
                    <h5>{comments.length} comment(s)</h5>
                </div>
                <Link to={`/viewblog/${id}`} className='btn btn-primary'>
                    Read More
                </Link>
            </div>
            <div className="card-footer text-muted">
                Posted on {format(new Date(dateSubmitted), 'MM/dd/yyyy')}
            </div>
        </div>
    );
}


export default BlogPost;