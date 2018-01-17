import axios from 'axios';

import { USER_AUTHED } from '../reducers/insert_trade_reducer';
import { tradesUpdated } from '../actions/tradesUpdatedAction';

const TRADE_SERVER = 'https://arcane-badlands-59107.herokuapp.com/';

export const checkLoginStatus = () => {
    const request = axios.post(`${TRADE_SERVER}trade`, { 'trade': trade });
    return (dispatch) => {
        request.then((res) => {
            if (res.status !== 200) {
                console.log(`Couldn't insert trade`);
            } else {
                dispatch(
                    {
                        type: INSERT_TRADE,
                        payload: res.data
                    }
                );
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}