import React from 'react';
import { format } from 'date-fns';
import AddCommentForm from './AddCommentForm';
import Comment from './Comment';

const BlogPostWithComments = ({ blogPost }) => {
    const { id, title, text, dateSubmitted, comments } = blogPost;

    return (
            <div className="col-lg-8">
                <h1 className="mt-4">{title}</h1>
                <p className="lead"> by Huds</p>
                <hr />
                <p>Posted on {format(new Date(dateSubmitted), 'MM/dd/yyyy')}</p>
                <hr />
                {text.split('\n').map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
            <hr />
            {!!comments && comments.map(comment => <Comment comment={comment} key={comment.id} />)}
            <AddCommentForm id={id} />
            </div>
    );
}

export default BlogPostWithComments;