import React from 'react';
import '../Assets/css/posts.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Moment from "react-moment";
import 'moment/locale/fr';

const styles = {
    borderBottom: '2px solid #eee',
    background: '#fff',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    borderRadius: '7px'
};

export default ({
                    post: { title, date, body, _id }, onDelete }) => {

    /*const user = this.props.user;*/

    return (
        <div className="card-post" style={ styles }>

            <h2>{ title }</h2>
            <p>{ body }</p>
            <Moment fromNow locale="fr">{date}</Moment>
            <button className="btn btn-danger" type="button" onClick={() => {if (window.confirm('Êtes-vous sur de supprimer ce post ?'))onDelete(_id)}}>
                X
            </button>
        </div>
    );
};
