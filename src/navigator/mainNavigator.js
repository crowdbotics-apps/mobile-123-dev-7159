import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen28196Navigator from '../features/BlankScreen28196/navigator';
import BlankScreen98184Navigator from '../features/BlankScreen98184/navigator';
import Messaging8169Navigator from '../features/Messaging8169/navigator';
import EmailAuth8168Navigator from '../features/EmailAuth8168/navigator';
import CalendarView8164Navigator from '../features/CalendarView8164/navigator';
import Messaging8163Navigator from '../features/Messaging8163/navigator';
import EmailAuth8162Navigator from '../features/EmailAuth8162/navigator';
import CalendarView8161Navigator from '../features/CalendarView8161/navigator';
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
BlankScreen28196: { screen: BlankScreen28196Navigator },
BlankScreen98184: { screen: BlankScreen98184Navigator },
Messaging8169: { screen: Messaging8169Navigator },
EmailAuth8168: { screen: EmailAuth8168Navigator },
CalendarView8164: { screen: CalendarView8164Navigator },
Messaging8163: { screen: Messaging8163Navigator },
EmailAuth8162: { screen: EmailAuth8162Navigator },
CalendarView8161: { screen: CalendarView8161Navigator },
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
