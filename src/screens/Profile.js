import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableHighlight, 
    FlatList
  } from 'react-native';

export default class Profile extends Component {

    static navigationOptions = {
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="user" size={25} color={'#f2611d'}/>
      )
    };

    render() {
        const data = [
            {
                id: 1,
                title: 'Casa 1',
            },
            {
                id: 2,
                title: 'Casa 2',
            },
            {
                id: 3,
                title: 'Casa 3',
            },
            {
                id: 4,
                title: 'Casa 4',
            },
            {
                id: 5,
                title: 'Casa 5',
            },
        ];
     
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.user}>
                    <Icon name="user-circle" size={60} color={'#f2611d'} style={styles.imgUser}/>
                    <Text style={styles.nameUser}> Nome Usuario </Text> 
                    <Text style={styles.nameUser}> Imóveis anunciados: 0 </Text> 
                </View>
                <FlatList
                    data={data}
                    
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                             <Text style={styles.text}> {item.title} </Text> 
                        </View>
                       
                    )}
                    keyExtractor={item => item.id}
                />
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
    user:{
        backgroundColor: '#C3C3C3',
        height: 200,
        alignItems: "center",
    },
    imgUser:{
        borderRadius: 45,
        backgroundColor: '#FFF',
        //borderWidth: 1,
        //alignItems: "center",
        alignSelf: 'center',
        //marginVertical: 50,
        marginTop: 40,
        marginBottom: 10,
    },
    item: {
        alignItems: "center",
        backgroundColor: "#ffd1a1",
        flexGrow: 1,
        margin: 5,
        padding: 20
    },
    text: {
        color: "#333333"
    }
});
