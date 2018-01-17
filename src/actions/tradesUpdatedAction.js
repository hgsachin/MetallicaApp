import axios from 'axios';
import { TRADE_LIST_UPDATED } from '../reducers/trade_list_reducer';

const TRADE_SERVER = 'https://arcane-badlands-59107.herokuapp.com/';

export const tradesUpdated = () => {
    const request = axios.get(TRADE_SERVER);
    return (dispatch) => {
        request.then((res) => {
            dispatch({
                type: TRADE_LIST_UPDATED,
                payload: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}