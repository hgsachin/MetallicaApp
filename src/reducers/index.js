import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import NotificationReducer from './notification_reducer';
import TradeListReducer from './trade_list_reducer';
import TradeEditorReducer from './trade_editor_reducer';
import DeleteTradeReducer from './delete_trade_reducer';
import UpdateTradeReducer from './update_trade_reducer';
import InsertTradeReducer from './insert_trade_reducer';

const rootReducer = combineReducers({
    metals: NotificationReducer,
    trades: TradeListReducer,
    selectedTrade: TradeEditorReducer,
    deleteTradeRes: DeleteTradeReducer,
    updatedTrade: UpdateTradeReducer,
    insertedTrade: InsertTradeReducer,
    form: formReducer
});

export default rootReducer;