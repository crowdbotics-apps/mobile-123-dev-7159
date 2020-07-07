import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging8157Navigator from '../features/Messaging8157/navigator';
import EmailAuth8156Navigator from '../features/EmailAuth8156/navigator';
import CalendarView8155Navigator from '../features/CalendarView8155/navigator';
import Messaging8154Navigator from '../features/Messaging8154/navigator';
import EmailAuth8153Navigator from '../features/EmailAuth8153/navigator';
import CalendarView8152Navigator from '../features/CalendarView8152/navigator';
import BlankScreen48151Navigator from '../features/BlankScreen48151/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging8157: { screen: Messaging8157Navigator },
EmailAuth8156: { screen: EmailAuth8156Navigator },
CalendarView8155: { screen: CalendarView8155Navigator },
Messaging8154: { screen: Messaging8154Navigator },
EmailAuth8153: { screen: EmailAuth8153Navigator },
CalendarView8152: { screen: CalendarView8152Navigator },
BlankScreen48151: { screen: BlankScreen48151Navigator },

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
