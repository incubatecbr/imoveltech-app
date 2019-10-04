import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';


export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      pass: ''
    }
  }


  onSubmitNewUser = () => {
    if(this.state.username != '' || this.state.pass != ''){
        Alert.alert('send to server');
    }else{
        Alert.alert('Por favor preencha os campos para entrar');
    }
  }


  render() {
    return(
      <View style={styles.container}>
        {/* <Image source={require('../images/logoApp.png')} style={styles.logoApp}/> */}
        <Text style={{margin: 20, textAlign: 'center'}}>Para cadastrar-se informe um nome de usuário e uma senha.</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
              placeholder="Nome de usuário"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(pass) => this.setState({pass})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmitNewUser()}>
          <View style={{ flexDirection: 'row', justifyContent: 'center',  alignItems: 'center',}}>
            <Text style={{color: 'white'}}>Cadastrar</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Index')}>
            <Text style={{color: '#3dbae0'}}>Voltar para Login</Text>
        </TouchableHighlight> 

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 30,
  },
  input:{
    padding: 0,
    width:  '50%',
    textAlign: 'center', 
    height: 35,  
    borderBottomWidth: 2,
    borderColor: '#f2611d',  
  },
  buttonContainer: {
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:130,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3dbae0",
  },
});

