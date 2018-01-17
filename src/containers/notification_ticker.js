import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import socketIO from 'socket.io-client';

import { notificationReceived } from '../actions/index';
import NotificationList from '../components/notification_list';

const SOCKET_SERVER_URL = 'https://sheltered-peak-35300.herokuapp.com/' || 'http://localhost:3020/'

class NotificationTicker extends Component {
    componentWillMount() {
        this.connectToSocket();
    }
    connectToSocket() {
        const io = socketIO(SOCKET_SERVER_URL);
        io.on('connect', () => {
            console.log('connected to socket : ', io);
        });
        io.on('disconnect', function () { console.log('Disconnected') });
        io.on('notification', (data) => {
            this.props.notificationReceived(data.message)
        });
    }

    render() {
        return (
            <ul className="container-fluid notification-ticker">
                <NotificationList metals={this.props.metals} />
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ notificationReceived: notificationReceived }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationTicker);