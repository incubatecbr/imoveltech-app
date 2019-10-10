import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableHighlight, FlatList, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';
import ImagePicker from 'react-native-image-picker';

export default class NewAd extends Component {   
    constructor(props) {
        super(props);
        this.state = {
          titleAd: null,
          sizeHome: null,
          bedrooms: null,
          suites: null,
          wc: null,
          sizeRecreation: null,
          pool: null,
          garagem: null,
          sourceImg: null,
          base64Img: null,
        };
    }

    static navigationOptions = {
        tabBarIcon: ({tintColor, activeTintColor}) => (
          <Icon name="plus" size={22} color={'#f2611d'}/>
        )
    };

    onSubmitAd = async() => {
        //validation
        if(this.onValidateData() === true){
            //console.log('Send db');
            //console.log(this.state);
            //{class:'immobile', action:'add', data: this.state}
            //{header: {Authorization: "Bearer access-token", 'Content-Type': 'multipart/form-data'} }
            //send json form
            const response = await Axios.post("http://192.168.100.154/imoveltech/",{class:'immobile', action:'add', data: this.state});
            const { data } = response;
            console.log(data);
        }
    }

    //Function verify if any state empty
    onValidateData = () => {
        let e = null;
        let arr = this.state;
        for(var i in arr){
            if(arr[i] === null){
               e = true;
            }
        }
        if(e != true){
            return true;
        }else{
            Alert.alert('Por favor preencha todos os campos.');
        } 
    }

    selectPhotoTapped = () => {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          mediaType: 'photo',
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          //console.log('Response = ', response);
          if (response.error) {
            console.warn('ImagePicker Error: ', response.error);
          } else {
            let source = {uri: response.uri};
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({ 
                sourceImg: source,
                base64Img: response.data
              });
          }

        });
    }

  
  render() {
    return(
        <SafeAreaView>
             <ScrollView>
                <View style={styles.container}>
                <Text style={styles.txtInfoTop}> Preencha todos os campos para anúnciar novo imovél </Text> 
                    <TextInput style={styles.input}
                        placeholder="Titulo anúncio"
                        underlineColorAndroid='transparent'
                        onChangeText={(titleAd) => this.setState({titleAd})}/>

                    <TextInput style={styles.input}
                        placeholder="Tamanho da casa em m²"
                        maxLength={3}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                        onChangeText={(sizeHome) => this.setState({sizeHome})}/>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de quartos"
                        maxLength={1}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                        onChangeText={(bedrooms) => this.setState({bedrooms})}/>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de suítes"
                        maxLength={1}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                        onChangeText={(suites) => this.setState({suites})}/>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de banheiros"
                        maxLength={1}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                        onChangeText={(wc) => this.setState({wc})}/>

                    <TextInput style={styles.input}
                        placeholder="Tamanho da área de lazer em m²"
                        maxLength={3}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                        onChangeText={(sizeRecreation) => this.setState({sizeRecreation})}/>

                
                    <Text>Possui piscina ?</Text>
                    <View style={styles.radioGroup}>
                        <TouchableOpacity style={styles.circle} onPress={() => this.setState({ pool: '1' })}> 
                            { this.state.pool === '1' && (<View style={styles.checkedCircle} />) }
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 5 }}>Sim</Text>
                        <TouchableOpacity style={styles.circle} onPress={() => this.setState({ pool: '0' })}> 
                            { this.state.pool === '0' && (<View style={styles.checkedCircle} />) }
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: 5 }}>Não</Text>
                    </View>

                    <TextInput style={styles.input}
                        placeholder="Quantidade de vagas na garagem"
                        maxLength={1}
                        keyboardType={'numeric'}
                        underlineColorAndroid='transparent'
                        onChangeText={(garagem) => this.setState({garagem})}/>

                    <Text>Clique abaixo para adicionar fotos do imovel</Text>
                    <TouchableHighlight style={{marginVertical: 5}} onPress={() => this.selectPhotoTapped() }>
                        <View style={{flexDirection: 'row', padding: 10, borderWidth: 1, borderColor: '#d57900'}}>
                            <Icon name="plus" size={25} color={'grey'} style={{marginHorizontal:5}}/>
                            <Icon name="image" size={25} color={'grey'}/>
                        </View>
                    </TouchableHighlight>
                    
                    {this.state.sourceImg === null  ? (                                                                                                                            
                        <Text style={{fontSize: 12, color: 'grey'}}>Escolha uma foto..</Text>
                    ) : (
                        <Image style={styles.imgPicker} source={this.state.sourceImg} /> 
                    )}

                    <TouchableHighlight style={styles.btn} onPress={() => this.onSubmitAd()}>
                        <Text style={{color: 'white'}}> <Icon name="check-square-o" size={14} color={'white'}/> Anunciar</Text>
                    </TouchableHighlight>

                   

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
        width:  '70%',
        textAlign: 'center', 
        height: 35,  
        //borderRadius: 10,  
        //borderWidth: 2,  
        borderBottomWidth: 2,
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
    imgPicker:{
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
    },
});
