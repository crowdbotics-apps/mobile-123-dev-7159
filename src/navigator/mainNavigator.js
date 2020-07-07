import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging8163Navigator from '../features/Messaging8163/navigator';
import EmailAuth8162Navigator from '../features/EmailAuth8162/navigator';
import CalendarView8161Navigator from '../features/CalendarView8161/navigator';
import Messaging8160Navigator from '../features/Messaging8160/navigator';
import EmailAuth8159Navigator from '../features/EmailAuth8159/navigator';
import CalendarView8158Navigator from '../features/CalendarView8158/navigator';
import Messaging8157Navigator from '../features/Messaging8157/navigator';
import EmailAuth8156Navigator from '../features/EmailAuth8156/navigator';
import CalendarView8155Navigator from '../features/CalendarView8155/navigator';
import EmailAuth8153Navigator from '../features/EmailAuth8153/navigator';
import CalendarView8152Navigator from '../features/CalendarView8152/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging8163: { screen: Messaging8163Navigator },
EmailAuth8162: { screen: EmailAuth8162Navigator },
CalendarView8161: { screen: CalendarView8161Navigator },
Messaging8160: { screen: Messaging8160Navigator },
EmailAuth8159: { screen: EmailAuth8159Navigator },
CalendarView8158: { screen: CalendarView8158Navigator },
Messaging8157: { screen: Messaging8157Navigator },
EmailAuth8156: { screen: EmailAuth8156Navigator },
CalendarView8155: { screen: CalendarView8155Navigator },
EmailAuth8153: { screen: EmailAuth8153Navigator },
CalendarView8152: { screen: CalendarView8152Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
