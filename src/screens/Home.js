import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, SafeAreaView, FlatList, Text, Alert} from 'react-native';
import Card from '../components/Card';
import Modal from '../components/ModalHome';
import Api from '../Api';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      immobiles: [],
      loading: true, 
    };
  }

  async componentDidMount(){
    const response = await Api.post("/", {class:'immobile', action:'list'});
    const { data } = response;
    this.setState({immobiles: data});
    this.props.navigation.setParams({ cControll: 0});//controll for force remount.
    this.sleepTest(2000).then( () => {
      this.setState({loading: false});
    });
  }

  sleepTest = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
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
           <Modal visible={this.state.loading}/>

            <FlatList
              data={this.state.immobiles}
              keyExtractor={item => item.id_}
              renderItem={({item}) =>  <Card  imgPath={{uri: `data:image/gif;base64,${item.img_base64}`}} price={item.sale_price} end={item.address_home} cod={item.id_} />}
            />
          </ScrollView>
        </SafeAreaView>
      );
    }
}
