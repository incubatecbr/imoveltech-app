import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    SafeAreaView,
    Alert, 
    Image
  } from 'react-native';


export default class Home extends Component {
    static navigationOptions = {
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="home" size={22} color={'#f2611d'} />
      )
    };
  
    render() {
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

               
                    <View style={styles.card}>
                        <Image source={require('../images/4.jpg')} style={{height: 130}}/>
                    </View>
                    
                    <View elevation={5} style={styles.buttonContainer}>
                        <Image source={require('../images/4.jpg')}/>
                    </View>

                    <View
                        style={{
                            
                            shadowOpacity: 0.75,
                            shadowRadius: 5,
                            shadowColor: 'red',
                            shadowOffset: { height: 0, width: 0 },
                        }}
                        >
                            <Text> AAAAAAAAAAA    </Text>
                        </View>

            </ScrollView>
        </SafeAreaView>
        
      
      );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#DCDCDC',
    },
    card:{
        margin: 10,
        borderWidth: 1,
        borderRadius: 3,
        height: 230,

    },
    buttonContainer: {
        //backgroundColor: '#2E9298',
        //borderRadius: 10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      }
    
});
