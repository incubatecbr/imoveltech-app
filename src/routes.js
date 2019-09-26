import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Home from './screens/Home';

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreenss</Text>
      </View>
    );
  }
}



class Anuncio extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor, activeTintColor}) => (
      <Icon name="plus" size={22} color={colorIcons} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Perfil extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor, activeTintColor}) => (
      <Icon name="user" size={22} color={colorIcons} />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

//-------

const colorIcons = "#f2611d"
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Anuncio,
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
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;



