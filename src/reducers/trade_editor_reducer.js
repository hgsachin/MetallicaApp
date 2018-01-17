import axios from 'axios';

export const TRADE_SELECTED = 'TRADE_SELECTED';

export default (state = null, action) => {
    switch (action.type) {
        case TRADE_SELECTED:
            return action.payload;
    }
    return state;
}