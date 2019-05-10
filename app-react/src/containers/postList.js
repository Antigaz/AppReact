import React, {Component} from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';
import { deletePost, fetchAllPosts, updatePost } from '../actions';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        if(!this.props.posts.length) {
            return (
                <div className='RienIci'>
                    Il n'y a rien ici :/
                </div>
            )
        }
        return (
            <div>
                {this.props.posts.map(post => {
                    return (
                        <Post post={ post } onDelete={ this.props.deletePost } onUpdate={ this.props.updatePost } key={ post._id } />
                    );
                })}
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deletePost: deletePost(dispatch),
        updatePost: updatePost(dispatch),
        fetchAllPosts: fetchAllPosts(dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);