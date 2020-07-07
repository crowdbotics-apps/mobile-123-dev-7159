import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView8161Reducer from '../features/CalendarView8161/redux/reducers';
import EmailAuth8159Reducer from '../features/EmailAuth8159/redux/reducers';
import CalendarView8158Reducer from '../features/CalendarView8158/redux/reducers';
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
CalendarView8161: CalendarView8161Reducer,
EmailAuth8159: EmailAuth8159Reducer,
CalendarView8158: CalendarView8158Reducer,
EmailAuth8156: EmailAuth8156Reducer,
CalendarView8155: CalendarView8155Reducer,
EmailAuth8153: EmailAuth8153Reducer,
CalendarView8152: CalendarView8152Reducer,

});