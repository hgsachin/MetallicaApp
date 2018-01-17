export const NOTIFICATION_RECEIVED= 'NOTIFICATION_RECEIVED';

export default (state = null, action) => {
    switch(action.type) {
        case NOTIFICATION_RECEIVED :
            return action.payload;
    }
    return state;
}