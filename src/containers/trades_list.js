import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { tradesUpdated } from '../actions/tradesUpdatedAction';
import TradeListItem from './trade_list_item';

class TradeList extends Component {
    componentWillMount() {
        this.props.tradesUpdated();
    }
    render() {
        return (
            <div>
                <TradeListItem trades={this.props.trades} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ tradesUpdated: tradesUpdated }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeList);