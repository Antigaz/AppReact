import { ADD_POST, DELETE_POST, FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const createPost = ({ title, date, body }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, {title, date, body})
            .then(response => {
                dispatch(createPostSuccess(response.data))
                window.location.reload();
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess =  (data) => {
    return {
        type: ADD_POST,
        payload: {
            _id: data._id,
            title: data.title,
            date: data.date,
            body: data.body
        }
    }
};

export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
}

export const deletePost = dispatch => {
    return (id) => {
        return axios.get(`${apiUrl}/delete/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST,
        posts
    }
};

export const fetchAllPosts = (dispatch) => {
    return () => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchPosts(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};