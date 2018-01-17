import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h4 className="card-title">Metallica App</h4>
                    <p className="card-text">Please Login to view Trade details.</p>
                    <a href="/login" className="btn btn-info">
                        <div>
                            <span className="fab fa-google"></span>
                            <span className="pl-2 font-weight-bold">Login with Google</span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}