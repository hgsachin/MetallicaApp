import axios from 'axios';

import { DELETE_TRADE } from '../reducers/delete_trade_reducer';
import { tradesUpdated } from '../actions/tradesUpdatedAction';
import { tradeSelected } from '../actions/index';

const TRADE_SERVER = 'https://arcane-badlands-59107.herokuapp.com/';

export const deleteTrade = (trade) => {
    const request = axios.delete(`${TRADE_SERVER}trade/${trade._id}`)
    return (dispatch) => {
        request.then((res) => {
            if (res.status !== 200) {
                console.log(`Couldn't delete the trade`);
            } else {
                dispatch(
                    {
                        type: DELETE_TRADE,
                        payload: res.data
                    }
                );
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}

export const clearDeleteNotif = () => {
    return {
        type: DELETE_TRADE,
        payload: null
    }
}