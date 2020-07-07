import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth8168Reducer from '../features/EmailAuth8168/redux/reducers';
import EmailAuth8165Reducer from '../features/EmailAuth8165/redux/reducers';
import CalendarView8164Reducer from '../features/CalendarView8164/redux/reducers';
import EmailAuth8162Reducer from '../features/EmailAuth8162/redux/reducers';
import CalendarView8161Reducer from '../features/CalendarView8161/redux/reducers';
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
EmailAuth8168: EmailAuth8168Reducer,
EmailAuth8165: EmailAuth8165Reducer,
CalendarView8164: CalendarView8164Reducer,
EmailAuth8162: EmailAuth8162Reducer,
CalendarView8161: CalendarView8161Reducer,
EmailAuth8156: EmailAuth8156Reducer,
CalendarView8155: CalendarView8155Reducer,
EmailAuth8153: EmailAuth8153Reducer,
CalendarView8152: CalendarView8152Reducer,

});