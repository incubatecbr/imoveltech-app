import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

function MiniOffline() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>Sem conexão com a Internet</Text>
    </View>
  );
}

class Offline extends PureComponent {
  // state = {
  //   isConnected: true
  // };

  // componentDidMount() {
  //   NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  // }

  // componentWillUnmount() {
  //   NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  // }

  // handleConnectivityChange = isConnected => {
  //     this.setState({ isConnected });
  // };
    
  render() {
      return <MiniOffline/>;
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