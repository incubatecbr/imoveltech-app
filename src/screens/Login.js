import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Image } from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : 'igor',
      pass: '123',
      errors: 0
    }
    global._IDuser = null;
  }


  onSubmitLoginUser = async() => {
    if(this.state.username != '' || this.state.pass != ''){
      const response = await Axios.post("http://192.168.100.154/imoveltech/", {class:'user', action: 'verifyUser', username: this.state.username, pass: this.state.pass });
      const { data } = response;
      
      if( data.indexOf(true) ){
        global._IDuser = data[0];
        this.props.navigation.navigate('Dashboard');
      }else{
        Alert.alert('Usuário ou senha inválidos.')
      }

    }else{
      Alert.alert('Por favor preencha os campos para entrar');
      this.setState({errors : this.state.errors + 1 });
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../images/logoApp.png')} style={styles.logoApp}/>

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

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmitLoginUser()}>
          <View style={{ flexDirection: 'row', justifyContent: 'center',  alignItems: 'center',}}>
            <Icon name="check-square-o" size={14} color={'white'} style={{marginRight: 4}}/>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('NewRegister')}>
            <Text style={{color: '#3dbae0'}}>Cadastre-se</Text>
        </TouchableHighlight> 
      </View>
    );
  }

}


//Style page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logoApp:{
    width: 200,
    height: 100,
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
  loginText: {
    color: 'white',
  }
});

