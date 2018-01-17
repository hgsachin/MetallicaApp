import React, { Component } from 'react';
import cookie from 'react-cookie';

import App from '../components/app';
import Login from '../components/login';
const keys = require('../config/keys');

export default class Home extends Component {
    componentWillMount() {
        this.setState({
            userAuthed: cookie.load('session') ? true : false
        });
    }
    render() {
        const userAuthed = this.state.userAuthed;
        if (userAuthed) {
            return <App />
        } else {
            return <Login />
        }
    }
}