import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth8156Reducer from '../features/EmailAuth8156/redux/reducers';
import CalendarView8155Reducer from '../features/CalendarView8155/redux/reducers';
import EmailAuth8153Reducer from '../features/EmailAuth8153/redux/reducers';
import CalendarView8152Reducer from '../features/CalendarView8152/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth8156: EmailAuth8156Reducer,
CalendarView8155: CalendarView8155Reducer,
EmailAuth8153: EmailAuth8153Reducer,
CalendarView8152: CalendarView8152Reducer,

});