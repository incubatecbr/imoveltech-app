import React, { Component } from 'react';

import { View, StyleSheet, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewAd extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor, activeTintColor}) => (
          <Icon name="plus" size={22} color={'#f2611d'}/>
        )
      };
  
  render() {
    return(
            <View style={styles.container}>
                <Text> Nome Usuario </Text> 
                <TextInput style={styles.inputs}
                    placeholder="Nome de usuário"
                    underlineColorAndroid='transparent'/>
            </View>
        );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    
});
