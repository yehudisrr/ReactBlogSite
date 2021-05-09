import React from 'react';
import { format } from 'date-fns';

const Comment = ({ comment }) => {
    const { commenterName, text, datePosted } = comment;
    return (
        <div className="media mb-4">
            <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
            <div className="media-body">
                <h5 className="mt-0">
                    {commenterName}
                    <small>{format(new Date(datePosted), 'MM/dd/yyyy')}</small>
                </h5>
                {text}
            </div>
        </div>
    );
}

export default Comment;
