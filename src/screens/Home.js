import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableHighlight, 
    Image,
    Alert
  } from 'react-native';

export default class Home extends Component {


    static navigationOptions = {
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="home" size={22} color={'#f2611d'} />
      )
    };
  
    render() {
      //shadow card
      const shadowCard = {
        shadowOpacity: 0.34,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowColor: '#000',
        shadowRadius: 6.27,
        elevation: 10,
      }

      return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
               
                    <View style={[styles.card, shadowCard]}>
                        <Image source={require('../images/2.jpg')} style={styles.imgCard}/>
                        <View style={styles.infCard}>
                          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>R$ 1.700,00</Text>
                            <Text style={styles.inf}>Código: 657421</Text>
                          </View>
                          <Text style={styles.inf}>Av. Souza Naves, 1625 - Ivaiporã - Paraná </Text>
                          {/* button */}
                          <TouchableHighlight style={styles.buttonContainer} onPress={() => Alert.alert('click..')}>
                            <Text style={{color: 'white'}}> + Informações</Text>
                          </TouchableHighlight>
                          {/* button */}
                        </View>
                    </View>

                    
                    <View  style={[styles.card, shadowCard]}>
                    <Image source={require('../images/4.jpg')} style={styles.imgCard}/>
                        <View style={styles.infCard}>
                          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>R$ 1.700,00</Text>
                            <Text style={styles.inf}>Código: 657421</Text>
                          </View>
                          <Text style={styles.inf}>Av. Souza Naves, 1625 - Ivaiporã - Paraná </Text>
                          {/* button */}
                          <TouchableHighlight style={styles.buttonContainer} onPress={() => Alert.alert('click..')}>
                            <Text style={{color: 'white'}}> + Informações</Text>
                          </TouchableHighlight>
                          {/* button */}
                        </View>
                    </View>

                    <View  style={[styles.card, shadowCard]}>
                    <Image source={require('../images/1.jpg')} style={styles.imgCard}/>
                        <View style={styles.infCard}>
                          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>R$ 1.700,00</Text>
                            <Text style={styles.inf}>Código: 657421</Text>
                          </View>
                          <Text style={styles.inf}>Av. Souza Naves, 1625 - Ivaiporã - Paraná </Text>
                          {/* button */}
                          <TouchableHighlight style={styles.buttonContainer} onPress={() => Alert.alert('click..')}>
                            <Text style={{color: 'white'}}> + Informações</Text>
                          </TouchableHighlight>
                          {/* button */}
                        </View>
                    </View>

  

            </ScrollView>
        </SafeAreaView>
        
      
      );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    card:{
      backgroundColor: '#FFF',
      margin: 10,
      height: 230,
      width: Dimensions.get('screen').width - 25, //tamanho da tela - 20px left, right
      borderRadius: 10,
    },
   
    imgCard:{
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10,
      height: 130,
      width: 'auto', 
    },
    infCard:{
      margin: 10,
    },
    buttonContainer: {
      backgroundColor: "#f2611d",
      height: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginHorizontal: 25,
      width: '100%',
      borderRadius: 5,
      alignSelf: 'center',
    },
    inf:{
      color: '#808080',
      fontSize: 14,
    },
    shaw:{
      shadowOpacity: 0.30,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowColor: '#000',
      shadowRadius: 4.6,
      elevation: 8,
    },
    
    
    
});
