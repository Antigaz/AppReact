
import { connect } from 'react-redux';
import { createPost } from '../actions';
import NewPost from '../components/newpost';

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewPost);