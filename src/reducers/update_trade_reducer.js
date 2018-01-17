export const UPDATE_TRADE = 'UPDATE_TRADE';

export default (state = null, action) => {
    switch (action.type) {
        case UPDATE_TRADE:
            return action.payload;
        default:
            return state;
    }
}