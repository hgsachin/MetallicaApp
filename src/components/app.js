import React, { Component } from 'react';
import NotificationTicker from '../containers/notification_ticker';
import TradeList from '../containers/trades_list';
import TradeModify from '../containers/trade_modify';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NotificationTicker />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-lg-8">
              <TradeList />
            </div>
            <div className="col-sm-4 col-lg-4">
              <TradeModify />
            </div>
          </div>
        </div>
      </div>
    );
  }
}