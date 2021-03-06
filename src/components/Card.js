import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet, Dimensions, Alert } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  viewDetails = (id) => {
    this.props.nav.navigate('Detalhes',{
      codImmobile: id,
    });
  }

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
        <View style={[styles.card, shadowCard]}>
            <Image source={this.props.imgPath} style={styles.imgCard}/>
            <View style={styles.infCard}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.price}>R$ {this.props.price},00</Text>
                    <Text style={styles.inf}>Código: {this.props.cod}</Text>
                </View>
                <Text style={styles.inf}>{this.props.end}</Text>
                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.viewDetails( this.props.cod )}>
                    <Text style={{color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 13}}> + Informações</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
  }
}
export default Card;

const styles = StyleSheet.create({
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
      fontFamily: 'Montserrat-Italic',
      color: '#808080',
      fontSize: 14,
    },
    price:{
      fontSize: 15, 
      color: 'black', 
      fontFamily: 'Montserrat-Bold',
    }
    
});
