import React, { Component } from 'react';
import '../Assets/css/posts.css';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";

class Profil extends Component {

    render() {

        const user = this.props.user;
        const posts = this.props.posts;

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
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value= {user.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        value={ user.password }
                                    />
                                </div>
                                <p>Nombre de post:
                                    {nbPosts}
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
    user: state.auth.user
})

export default withRouter(connect(mapStateToProps)(Profil));