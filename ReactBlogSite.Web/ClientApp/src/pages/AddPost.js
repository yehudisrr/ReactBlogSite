import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddPost = () => {
    const [blogPost, setBlogPost] = useState({ text: '', title: '' });
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...blogPost };
        copy[e.target.name] = e.target.value;
        setBlogPost(copy);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/blogposts/admin', blogPost);
        history.push('/');
    }

    const { text, title } = blogPost;
    return (
            <div className="row">
                <div className='col-md-6 offset-md-3 card card-body bg-light'>
                    <h2>Add new post</h2>
                    <input type="text"
                        className='form-control'
                        name='title'
                        value={title}
                        onChange={onTextChange}
                        placeholder="Title" />
                    <br />
                    <textarea
                        className='form-control'
                        name='text'
                        value={text}
                        onChange={onTextChange}
                        rows="20"
                    placeholder="blog your blog here" />
                <br />
                    <button className='btn btn-primary btn-lg btn-block' onClick={onSubmitClick}>Submit</button>
                </div>
        </div>

    )
}

export default AddPost;