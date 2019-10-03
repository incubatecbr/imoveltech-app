import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, SafeAreaView} from 'react-native';
import Card from '../components/Card';

export default class Home extends Component {
    componentDidMount(){
    }

    static navigationOptions = {
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="home" size={22} color={'#f2611d'} />
      )
    };
  
    render() {
      return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF'}}>
          <ScrollView>
            <Card imgPath={require('../images/casa1.jpg')} price="260.000,00" end="Av. Teste teste teste, 2525, Ivp" cod="456465" />
            <Card imgPath={require('../images/casa2.jpg')} price="140.000,00" end="Av. Teste teste teste, 2525, Ivp" cod="054451" />
            <Card imgPath={require('../images/casa3.jpg')} price="388.000,00" end="Av. Teste teste teste, 2525, Ivp" cod="654665" />
          </ScrollView>
        </SafeAreaView>
      );
    }
}
