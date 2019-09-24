import React, { Component } from 'react';
import Routes from './routes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';



export default class src extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      pass: '',
      signedIn: false,
      checkedSignIn: false,
      errors: 0
    }
  }
  
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onSubmitLoginUser = () => {
    if(this.state.username != '' || this.state.pass != ''){
      <Routes />
    }else{
      Alert.alert('Ops');
      this.setState({errors : this.state.errors + 1 });
    }
  }

//color="#90cee0"
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
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
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmitLoginUser()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('recoverypass')}>
            <Text>Esqueceu sua senha?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Cadastre-se</Text>
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
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

