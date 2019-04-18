import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authentication';

import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Profil from './components/profil';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/header.css';
import './Assets/css/home.css';

import 'react-confirm-alert/src/react-confirm-alert.css';
import Layout from "./components/Layout";


if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {




    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/profil" component={Profil}/>
                        <Route exact path="/" component={Home}/>
                        <Layout />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
