import React from 'react';
import '../Assets/css/posts.css';
import PictureVideo from "./postActions/pictureVideo";
import Sondage from "./postActions/sondage";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id_user: this.props.user.id,
            title: '',
            body: '',
            date: '',
            selectedFile: null
        };
    }


    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.props.user.id && this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            id_user: this.props.user.id,
            title: '',
            body: ''
        });
    };



    render() {
        return (
            <div>
                <form className="newPost" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Titre"
                            className="form-control titleNewPost"
                            name="title"
                            onChange={ this.handleInputChange }
                            value={ this.state.title }
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            cols="19"
                            rows="3"
                            placeholder="Corps"
                            className="form-control bodyNewpost"
                            name="body"
                            onChange={ this.handleInputChange }
                            value={ this.state.body }>
                        </textarea>
                    </div>
                    <div className="form-group boutonsPost">
                        <PictureVideo />
                        <Sondage />
                        <button type="button" className="btn btn-warning pj">
                            Identifier
                        </button>
                        <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                            <u>Annuler</u>
                        </button>
                        <button type="submit" className="btn btn-primary">Ajouter</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(NewPost));