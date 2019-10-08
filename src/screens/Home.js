import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, SafeAreaView, FlatList, Text} from 'react-native';
import Card from '../components/Card';
import Axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { immobiles: [] };
  }

  async componentDidMount(){
    const response = await Axios.post("http://192.168.100.154/imoveltech/", {class:'immobile', action:'list'});
    const { data } = response;
    this.setState({immobiles: data});
  }
  //Bottom Navigation
  static navigationOptions = {
    tabBarIcon: ({tintColor, activeTintColor}) => (
      <Icon name="home" size={22} color={'#f2611d'} />
    )
  };
  
    render() {
      return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF'}}>
          <ScrollView>
            <FlatList
              data={this.state.immobiles}
              keyExtractor={item => item.id_}
              renderItem={({item}) =>  <Card imgPath={{uri: `http://192.168.100.154/imoveltech/${item.path_folder}`}} price={item.sale_price} end={item.address_home} cod={item.id_} />}
            />
          </ScrollView>
        </SafeAreaView>
      );
    }
}
