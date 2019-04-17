import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';
import { deletePost } from '../actions';



function PostList({ posts, onDelete }) {
    const nbPosts = posts.length;
    if(!posts.length) {
        return (
            <div className='RienIci'>
                Il n'y a rien ici :/
            </div>
        )
    }
    return (
        <div>
            {posts.map(post => {
                return (
                    <Post post={ post } onDelete={ onDelete } key={ post._id } />
                );
            })}
        </div>
    );

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);