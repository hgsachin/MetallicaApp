export const INSERT_TRADE = 'INSERT_TRADE';

export default (state = null, action) => {
    switch (action.type) {
        case INSERT_TRADE:
            return action.payload;
        default:
            return state;
    }
}