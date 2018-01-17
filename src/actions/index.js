import { NOTIFICATION_RECEIVED } from '../reducers/notification_reducer';
import { TRADE_SELECTED } from '../reducers/trade_editor_reducer';

export const notificationReceived = (state) => {
    return {
        type: NOTIFICATION_RECEIVED,
        payload: state.metals
    }
}

export const tradeSelected = (trade = {}) => {
    return {
        type: TRADE_SELECTED,
        payload: trade
    }
}