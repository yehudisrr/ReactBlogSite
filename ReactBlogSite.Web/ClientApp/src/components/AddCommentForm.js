import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddCommentForm = ({ id }) => {
    const [comment, setComment] = useState({ text: '', commenterName: ''});
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...comment };
        copy[e.target.name] = e.target.value;
        setComment(copy);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/blogposts/addcomment', { ...comment, blogPostId: id });
        setComment({ commenterName: '', text: '' });
        history.push('/');
    }

    const { text, commenterName } = comment;
    return (
        <div className="row">
            <div className='col-md-6 offset-md-3 card card-body bg-light'>
                <h2>Leave a comment</h2>
                <input type="text"
                    className='form-control'
                    name='commenterName'
                    value={commenterName}
                    onChange={onTextChange}
                    placeholder="Please enter your name" />
                <br />
                <input type="hidden"
                    name='blogPostId'
                    value={id} />
                <textarea
                    className='form-control'
                    name='text'
                    value={text}
                    onChange={onTextChange}
                    rows="10"
                    placeholder="Let us know what you think" />
                <br />
                <button className='btn btn-primary btn-lg btn-block' onClick={onSubmitClick}>Submit</button>
            </div>
        </div>

    )
}

export default AddCommentForm;