export const DELETE_TRADE = 'DELETE_TRADE';

export default (state = null, action) => {
    switch (action.type) {
        case DELETE_TRADE:
            return action.payload;            
    }
    return state;
}