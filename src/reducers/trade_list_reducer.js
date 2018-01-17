export const TRADE_LIST_UPDATED = 'TRADE_LIST_UPDATED';

export default (state = null, action) => {
    switch (action.type) {
        case TRADE_LIST_UPDATED: {
            return action.payload;
        }
        default: return state;
    }
}