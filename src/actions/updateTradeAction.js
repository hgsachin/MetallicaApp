import axios from 'axios';

import { UPDATE_TRADE } from '../reducers/update_trade_reducer';
import { tradesUpdated } from '../actions/tradesUpdatedAction';
import { tradeSelected } from '../actions/index';

const TRADE_SERVER = 'https://arcane-badlands-59107.herokuapp.com/';

export const updateTrade = (trade) => {
    const request = axios.put(`${TRADE_SERVER}trade/${trade._id}`, trade);
    return (dispatch) => {
        request.then((res) => {
            if (res.status !== 200) {
                console.log(`Couldn't update the trade`);
            } else {
                dispatch(
                    {
                        type: UPDATE_TRADE,
                        payload: res.data
                    }
                );
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const clearUpdateNotif = () => {
    return {
        type: UPDATE_TRADE,
        payload: null
    }
}