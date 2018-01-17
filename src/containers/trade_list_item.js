import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tradeSelected } from '../actions/index';

class TradeListItem extends Component {
    constructor(props) {
        super(props);
        this.renderTradesList = this.renderTradesList.bind(this);
    }
    renderTradesList() {
        if (this.props.trades && this.props.trades != '') {
            return (
                this.props.trades.map((trade, key) => {
                    return (
                        <tr onClick={() => this.props.tradeSelected(trade)} key={trade._id}>
                            <td>{trade.trade_date}</td>
                            <td>{trade.commodity_id}</td>
                            <td>{trade.side}</td>
                            <td>{trade.qty}</td>
                            <td>{trade.price}</td>
                            <td>{trade.counterparty_id}</td>
                            <td>{trade.location_id}</td>
                        </tr>
                    );
                })
            );
        } else {
            return <tr><td>Trade List is Loading....</td></tr>
        }
    }
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered table-hover col-sm-12">
                    <thead className="thead-dark">
                        <tr>
                            <th>TRADE DATE</th>
                            <th>COMMODITY</th>
                            <th>SIDE</th>
                            <th>QTY (MT)</th>
                            <th>PRICE/MT</th>
                            <th>COUNTERPARTY</th>
                            <th>LOCATION</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {this.renderTradesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ tradeSelected: tradeSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeListItem);