import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Perfil from './screens/Profile';
import NewAd from './screens/NewAd';
import RegisterUser from './screens/NewUser';
//-------

const colorIcons = "#f2611d"
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    NewAd,
    Perfil
  },
  {
    navigationOptions: ({ navigation }) => {
      //const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerStyle: {
          height: 45,
        },
        headerTitle: "ImovelTech",
        headerTitleStyle: { textAlign: 'center', flex: 1, fontSize: 15},
      };
    },
    tabBarOptions: {
      activeBackgroundColor: '#d6d6d6',
      activeTintColor: colorIcons,
      labelStyle: {
        fontSize: 10,
      },
      
    }
  }
  
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: (
          <Icon
            style={{ paddingRight: 10, color: colorIcons }}
            onPress={() => Alert.alert('Logout..')}
            name="power-off"
            size={22}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Index: { screen: Login },
  Dashboard: { screen: AppDrawerNavigator },
  NewRegister: { screen: RegisterUser }
  
});
const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
