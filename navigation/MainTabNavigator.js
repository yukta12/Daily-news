import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'News feed',
  tabBarIcon: ({ focused }) => (
      <MaterialIcons name ={'home'} size={responsiveFontSize(4)} color={Colors.whiteColor}></MaterialIcons>
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'search',
  tabBarIcon: ({ focused }) => (
      <MaterialIcons name ={'search'} size={responsiveFontSize(4)} color={Colors.whiteColor}></MaterialIcons>
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,

},{
    tabBarOptions:{
        style:{
            backgroundColor: Colors.primaryColor,
            color:Colors.whiteColor
        }
    }
});

tabNavigator.path = '';

export default tabNavigator;
