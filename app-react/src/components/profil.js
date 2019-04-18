import React, { Component } from 'react';
import '../Assets/css/posts.css';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";

class Profil extends Component {

    render() {

        const user = this.props.user;
        const posts = this.props.posts;
        const nbPosts = posts.length;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>Profil</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={user.avatar} alt={user.name} title={user.name} className="rounded-circle img-responsive" />
                        </div>
                        <div className="col-md-10">
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value= {user.name}
                                        onChange={(event)=>this.setState(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <p>
                                        {user.email}
                                    </p>
                                </div>
                                <p>Nombre de posts créés:
                                     &nbsp;{ nbPosts }
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    posts: state.posts
})

export default withRouter(connect(mapStateToProps)(Profil));