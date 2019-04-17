import React from 'react';
import '../Assets/css/posts.css';

const styles = {
    borderBottom: '2px solid #eee',
    background: '#fafafa',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    maxWidth: '500px',
    borderRadius: '7px'
};

export default ({ post: { title, date, body, _id }, onDelete }) => {
    return (
        <div style={ styles }>
            <h2>{ title }</h2>
            <p>{ date }</p>
            <p>{ body }</p>
            <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
                Supprimer
            </button>
        </div>
    );
};