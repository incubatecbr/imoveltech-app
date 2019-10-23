import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


class ModalHome extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      
    return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
                >
                <View style={styles.container}>
                    <LottieView
                        
                        source={require('../images/house.json')}
                        autoPlay loop
                    />
                </View>
            </Modal>
    );
  }
}
export default ModalHome;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        fontFamily: 'Montserrat-Regular'
    }
});
