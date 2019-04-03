import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import CreatePost from './containers/createPost';
import PostList from './containers/postList';
import Chat from './components/chat';

import './Assets/css/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

const stylesApp = {
    marginTop: 40
}


class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <div>
                            <Navbar />
                            <Route exact path="/" component={ Home } />
                            <div className="container">
                                <Route exact path="/register" component={ Register } />
                                <Route exact path="/login" component={ Login } />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row" style={ stylesApp }>
                                <div className="col-md-6">
                                    <CreatePost />
                                </div>
                                <div className="col-md-6">
                                    <PostList />
                                </div>
                            </div>
                        </div>
                        <Chat/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

/*
class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Main />
        </div>
    );
  }
}
*/
