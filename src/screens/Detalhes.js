import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Api from '../Api';


export default class Detalhes extends Component {   
  constructor(props) {
    super(props);
  }

  async componentDidMount(){
    const { codImmobile } =  this.props.navigation.state.params;
    //console.log(codImmboile);
    const response = await Api.post("/", {class:'immobile', action:'details', id: codImmobile});
    const { data } = response;
    console.log(data);
    // this.setState({immobiles: data});
    // this.props.navigation.setParams({ cControll: 0});//controll for force remount.
    // this.sleepTest(2000).then( () => {
    //   this.setState({loading: false});
    // });
  }

   

  
  render() {
    return(
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.txtInfoTop}> Preencha todos os campos para anúnciar novo imovél </Text> 
              <Button title="Voltar" onPress={() => this.props.navigation.navigate('Dashboard')}/>
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
    }
});
