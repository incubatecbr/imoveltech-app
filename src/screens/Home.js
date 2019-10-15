import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, SafeAreaView, FlatList, Text, Alert} from 'react-native';
import Card from '../components/Card';
import Api from '../Api';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { immobiles: [] };
  }

  async componentDidMount(){
    const response = await Api.post("/", {class:'immobile', action:'list'});
    const { data } = response;
    this.setState({immobiles: data});
  }
  //Bottom Navigation
  static navigationOptions = {
    tabBarIcon: ({tintColor, activeTintColor}) => (
      <Icon name="home" size={22} color={'#f2611d'}/>
    )
  };
  
    render() {
      return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF'}}>
          <ScrollView>
            <FlatList
              data={this.state.immobiles}
              keyExtractor={item => item.id_}         
              renderItem={({item}) =>  <Card imgPath={{uri: `data:image/gif;base64,${item.img_base64}`}} price={item.sale_price} end={item.address_home} cod={item.id_} />}
            />
          </ScrollView>
        </SafeAreaView>
      );
    }
}
