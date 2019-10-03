import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Database from '../Database';
const db = new Database();

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      pass: '',
      errors: 0
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onSubmitLoginUser = () => {
    if(this.state.username != '' || this.state.pass != ''){
      db.selectUser(this.state.username, this.state.pass ).then( (data) => {
        if(data === false){
          Alert.alert('Dados incorretos..');
        }else{
          this.props.navigation.navigate('Dashboard');
        }
      }).catch((err)=>{
        console.warn(err);
      });
    }else{
      Alert.alert('Por favor preencha os campos para entrar');
      this.setState({errors : this.state.errors + 1 });
    }
  }


  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../images/logoApp.png')} style={styles.logoApp}/>
        {/* <View style={styles.inputContainer}>
          <Icon name="user" size={24} color={this.state.errors > 0 ? '#e31005': '#90cee0'} style={styles.inputIcon}/>
          <TextInput style={styles.inputs}
              placeholder="Nome de usuário"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        
        <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color={this.state.errors > 0 ? '#e31005': '#90cee0'} style={styles.inputIcon}/>
          <TextInput style={styles.inputs}
              placeholder="Senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(pass) => this.setState({pass})}/>
        </View> */}
        <View style={styles.inputCont}>
          <TextInput style={styles.input}
              placeholder="Nome de usuário"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>

        <View style={styles.inputCont}>
          <TextInput style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(pass) => this.setState({pass})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmitLoginUser()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
{/* 
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('recoverypass')}>
            <Text>Esqueceu sua senha?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Cadastre-se</Text>
        </TouchableHighlight> */}
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
    //backgroundColor: '#DCDCDC',
    backgroundColor: '#FFF',
  },
  logoApp:{
    width: 200,
    height: 100,
  },
  inputCont:{
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
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3dbae0",
  },
  loginText: {
    color: 'white',
  }
});

