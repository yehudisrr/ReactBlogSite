import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
import MostRecent from './pages/MostRecent';
import AddPost from './pages/AddPost';
import ViewBlog from './pages/ViewBlog';
import Layout from './Layout';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/mostrecent' component={MostRecent}/>
                <Route exact path='/admin' component={AddPost}/>
                <Route exact path='/viewblog/:id' component={ViewBlog} />
                <Route exact path='/page/:pageNumber' component={Home} />
            </Layout>
        );
    }
}

               