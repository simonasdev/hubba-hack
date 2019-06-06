import {
  createStackNavigator,
} from 'react-navigation';

import Home from '../screens/HomeScreen';
import Monitor from '../screens/Monitor';
import Schedules from '../screens/Schedules';
import Devices from '../screens/Devices';

export default createStackNavigator({
  Home,
  Monitor,
  Schedules,
  Devices
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff6f61'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  }
});
