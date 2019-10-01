import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db '~/www/testeDB.db'
var db = openDatabase({ name: 'testeDB.db',  createFromLocation: 1,});


export default class NewAd extends Component {   
    constructor(props) {
        super(props);
        this.state = {
          checkPool: null,
          FlatListItems: [],
        };
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM user', [], (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
                console.log(temp);
                //this.setState({FlatListItems: temp});
            });
        });
    }


    

    static navigationOptions = {
        tabBarIcon: ({tintColor, activeTintColor}) => (
          <Icon name="plus" size={22} color={'#f2611d'}/>
        )
    };



  
  render() {
    return(
        <SafeAreaView>
             <ScrollView>
                
                <View style={styles.container}>
                <Text style={styles.txtInfoTop}> Preencha todos os campos para anúnciar novo imovél </Text> 
                    <TextInput style={styles.input}
                        placeholder="Titulo anuncio"
                        underlineColorAndroid='transparent'/>

                    <TextInput style={styles.input}
                        placeholder="Tamanho da casa m²"
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'/>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de quartos"
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'/>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de suítes"
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'/>

                    <TextInput style={styles.input}
                        placeholder="Tamanho da área de lazer"
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'/>

                
                    <Text>Possui piscina ?</Text>
                    <View style={styles.radioGroup}>
                        <TouchableOpacity style={styles.circle} onPress={() => this.setState({ checkPool: 'yes' })}> 
                            { this.state.checkPool === 'yes' && (<View style={styles.checkedCircle} />) }
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 5 }}>Sim</Text>
                        <TouchableOpacity style={styles.circle} onPress={() => this.setState({ checkPool: 'no' })}> 
                            { this.state.checkPool === 'no' && (<View style={styles.checkedCircle} />) }
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 5 }}>Não</Text>
                    </View>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de vagas na garagem"
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'/>

                    <TouchableHighlight style={styles.btn} onPress={() => {
                        this.manager.createTable().then( (val) => {
                            Alert.alert('ok');
                        }).catch( (err) => { 
                            Alert.alert('error...');
                        })
                    }}>
                        <Text style={{color: 'white'}}> <Icon name="check-square-o" size={14} color={'white'}/> Anunciar</Text>
                    </TouchableHighlight>

                    <Text style={{color: 'blue'}}> {this.state.FlatListItems}</Text>

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
    txtInfoTop:{
        marginVertical: 20,
        //marginHorizontal: 20,
        color: '#808080',
    },
    input: {
        padding: 0,
        width:  '90%',
        textAlign: 'center', 
        height: 35,  
        borderRadius: 10,  
        borderWidth: 2,  
        borderColor: '#d57900',  
        //marginBottom: 10
        margin: 5,
        fontSize: 16,
    },
    radioGroup:{
        padding: 5,
        flexDirection: 'row',
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#f2611d',
    },
    btn: {
        backgroundColor: "#f2611d",
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 25,
        width: '60%',
        borderRadius: 5,
        alignSelf: 'center',
      },
});
