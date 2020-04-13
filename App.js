import React from 'react'
import {
  createAppContainer, createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {setNavigator} from './src/navigationRef';

import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import SingUpScreen from './src/screens/SignUpScreen';
import SingInScreen from './src/screens/SignInScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {AuthProvider} from './src/hooks/authProvider';
import {LocationProvider} from './src/hooks/locationProvider';
import {TrackProvider} from './src/hooks/TrackContext';
import {FontAwesome} from '@expo/vector-icons'

const trackListFlow =  createStackNavigator({
  TrackList:TrackListScreen,
  TrackDetail:TrackDetailScreen
})

trackListFlow.navigationOptions = {
  title:'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const switchNavigator = createSwitchNavigator({
  resolveAuth:ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignIn:SingInScreen,
    SignUp:SingUpScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
}) 

const App = createAppContainer(switchNavigator);

export default () => {
 return <TrackProvider>
  <LocationProvider>
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  </LocationProvider>
 </TrackProvider>
}
