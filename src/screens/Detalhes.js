import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Button, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import IconB from 'react-native-vector-icons/AntDesign';

import Api from '../Api';
import Modal from '../components/ModalHome';


export default class Detalhes extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      immobile: {
        id_: "",
        title_ad: "",
        size_m2_home: "",
        bedrooms: "",
        suites: "",
        wc: "",
        garage: "",
        img_base64: "",
        size_m2_recreation: "",
        sale_price: "",
        address_home: "",
      },
    }
  }

  async componentDidMount(){
    const { codImmobile } =  this.props.navigation.state.params;
    const response = await Api.post("/", {class:'immobile', action:'details', id: codImmobile});
    const { data } = response;
    this.setState({immobile: data});
    this.houseLoading(400).then( () => {
      this.setState({loading: false});
    });
  }

  houseLoading = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  render() {
    //shadow card
    const shadowCard = {
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    }
    //console.log(this.state.immobile);
    return(
        <SafeAreaView>
          <ScrollView>
          <Modal visible={this.state.loading}/>
            <View style={[styles.topContainer, shadowCard]}>
              <Image source={require('../images/logoWhite.png')} style={styles.logoApp}/>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}> {this.state.immobile.title_ad} </Text> 

              <View style={[styles.boxImg, shadowCard]}>
                  <Image 
                    source={{ uri: `data:image/png;base64,${this.state.immobile.img_base64}`}}
                    style={styles.img}
                  />
                  <Text style={{fontSize: 10, fontWeight: "500"}}>Valor do imóvel</Text>
                  <View style={styles.viewPrice}>
                    <Text style={{fontSize: 22, fontWeight: "700"}}>{this.state.immobile.sale_price},00</Text> 
                    <IconM style={{marginTop: 4, fontWeight: "700"}} name="attach-money" size={24} color={'#f2611d'}/>
                  </View>
              </View>

              <View style={[styles.viewAddress, shadowCard]}>
                <Text style={{fontSize: 10, fontWeight: "500"}}>Endereço:</Text>
                <Text style={styles.address}> <Icon name="address-card" size={22} color={'#f2611d'}/> {this.state.immobile.address_home}</Text> 
              </View>
              <View style={styles.row}>
                <View style={[styles.icons, shadowCard]}>
                  <Icon name="bed" size={22} color={'#f2611d'}/>
                  <Text>{this.state.immobile.bedrooms}</Text> 
                  <Text style={styles.text}>Quartos</Text> 
                </View>
                <View style={[styles.icons, shadowCard]}>
                <IconI name="ios-bed" size={22} color={'#f2611d'}/>
                  <Text>{this.state.immobile.suites}</Text> 
                  <Text style={styles.text}>Suites</Text>
                </View>
                <View style={[styles.icons, shadowCard]}>
                  <IconM name="wc" size={22} color={'#f2611d'}/>
                  <Text>{this.state.immobile.wc}</Text>
                  <Text style={styles.text}>WC</Text> 
                </View>
                <View style={[styles.icons, shadowCard]}>
                <IconMCI name="garage" size={22} color={'#f2611d'}/>
                  <Text>{this.state.immobile.garage}</Text> 
                  <Text style={styles.text}>Garagem</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.icons, shadowCard]}>
                  <IconS name="size-fullscreen" size={22} color={'#f2611d'}/>
                  <Text>{this.state.immobile.size_m2_home}</Text> 
                  <Text style={styles.text}>Área total m²</Text> 
                </View>
                  <View style={[styles.icons, shadowCard]}>
                    <IconS name="size-actual" size={22} color={'#f2611d'}/>
                    <Text>{this.state.immobile.size_m2_recreation}</Text> 
                    <Text style={styles.text}>Área lazer m²</Text> 
                  </View>
              </View>
              
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <IconB name="back" size={22} color={'#FFF'}/>
                    <Text style={{color: 'white'}}>Voltar</Text>
                </TouchableOpacity>
              
              {/* <Button title="Voltar" style={{marginVertical: 5}} onPress={() => this.props.navigation.navigate('Dashboard')}/> */}
            </View>
          </ScrollView>
        </SafeAreaView>

        );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  topContainer:{
    flex: 1,
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f07c46',
  },
  viewAddress:{
    height: 50,
    width: '96%',
    marginVertical: 10,
    backgroundColor: "#FFF",
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  address:{
    fontSize: 12,
  },
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icons:{
    padding: 5,
    backgroundColor: "#FFF",
    height: 65,
    width: 50,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  title:{
    fontSize: 20,
    fontWeight: "700",
    color: "#1a3f75",
    marginVertical: 10,
  },
  text:{
    fontSize: 9,
  },
  img:{
    width: 350,
    height: 250,
  },
  viewPrice:{
    flexDirection: 'row',
    marginVertical: 2,
  },
  boxImg:{
    alignItems: 'center', 
    backgroundColor: "#FFF",
    height: 300,
    borderRadius: 5,
    
  },
  buttonContainer: {
    backgroundColor: "#f2611d",
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 25,
    width: 100,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
