import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
import NetInfo from "@react-native-community/netinfo";
import Api from '../Api';

function ServerOffline() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>Servidor indisponível, por favor tente mais tarde.</Text>
    </View>
  );
}
function UserOffline() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>Sem conexão à internet.</Text>
    </View>
  );
}

class Offline extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sConnected: null,
      cConnected: null,
    };
    
  }
  async componentDidMount() {
    NetInfo.fetch().then(response => {
      this.setState({cConnected: response.isConnected});
    }).catch( error => {
      this.setState({cConnected: false});
    });
    const response = await Api.get("/").then( response => {
      if(response.status == 200){
        this.setState({sConnected: true});
      }
    }).catch( error => {
      this.setState({sConnected: false});
    });
    
  }
    
  render() {
    if( !this.state.sConnected ){
      return <ServerOffline />
    }
    if( !this.state.cConnected ){
      return <UserOffline />
    }
    return null;
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 0
  },
  offlineText: { 
    color: '#fff'
  }
});
export default Offline;