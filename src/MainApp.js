import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

import Dashboard from './Screen/Dashboard';
import Addcurrency from './Screen/Addcurrency'

 class MainApp extends Component {
  
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createAppContainer(createStackNavigator(
    {

        Dashboard,
        Addcurrency
    },
    {
        initialRouteName: 'Dashboard',
        headerMode: 'none',
    }
));


export default MainApp;