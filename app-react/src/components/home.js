import React, { Component } from 'react';
import CreatePost from '../containers/createPost';
import PostList from '../containers/postList';
import Chat from './chat';
import '../Assets/css/posts.css';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";

class Home extends Component {

    render() {

        const user = this.props.user;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>Fil d'actualité:</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle img-responsive" />
                        </div>
                        <div className="col-md-10">
                            <CreatePost />
                        </div>
                        <div className="col-md-12">
                            <PostList />
                        </div>
                    </div>
                </div>
                <Chat/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default withRouter(connect(mapStateToProps)(Home));