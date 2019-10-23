import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator, NavigationActions, StackActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Perfil from './screens/Profile';
import Anunciar from './screens/NewAd';
import RegisterUser from './screens/NewUser';
import Details from './screens/Detalhes';
//-------
//Reset for force remount component home.
const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'DashboardTabNavigator' })
  ]
});

const colorIcons = "#f2611d";
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Anunciar,
    Perfil
  }, 
  {
    navigationOptions: ({ navigation }) => {
      //const { routeName } = navigation.state.routes[navigation.state.index];
      const { params } = navigation.state.routes[navigation.state.index];
      if(params && params.cControll >= 0){
        params.cControll++;
        if( params.cControll > 1){//if isset controll and > 1.
          navigation.dispatch(resetAction);
        }
      }
      return {
        headerStyle: {
          height: 45,
        },
        headerTitle: "ImovelTech",
        headerTitleStyle: { textAlign: 'center', flex: 1, fontSize: 15, fontFamily: 'Montserrat-Bold'},
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
            onPress={() => navigation.navigate('Index')}
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
  NewRegister: { screen: RegisterUser },
  Detalhes: { screen: Details },
});
const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
