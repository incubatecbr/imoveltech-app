import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import Api from '../Api';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList} from 'react-native';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            idUser: global._IDuser,
            list: null,
            msg: null,
            dialogDelete: false,
            idImmobile: null,
        }
    }
    async componentDidMount(){
        const response = await Api.post("/", {class:'immobile', action: 'immobilesUser', id: this.state.idUser});
        const { data } = response;
        if(data.msg){
            this.setState({msg: data.msg});
        }else{
            this.setState({list: data[0], num_Immobile: data.length});
        }
    }

    onDeleteImmobile = async() => {
        const response = await Api.post("/", {class:'immobile', action: 'delete', id: this.state.idImmobile});
        const { data } = response;
        if(data === true){
            const nList = this.state.list.filter(item => item.id_ !== this.state.idImmobile);
            this.setState({list: nList});
            this.setState({dialogDelete: false});
        }else{
            Alert.alert(data);
        }
    }

    static navigationOptions = {
      tabBarIcon: ({tintColor, activeTintColor}) => (
        <Icon name="user" size={25} color={'#f2611d'}/>
      )
    };

    render() {
        
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.user}>
                    <Icon name="user-circle" size={60} color={'#f2611d'} style={styles.imgUser}/>
                    <Text style={styles.nameUser}> Nome Usuario </Text> 
                    <Text style={styles.nameUser}> Imóveis anunciados: {this.state.list === null ? ('0') : (this.state.list.length)} </Text> 
                </View>
                { this.state.list === null ? (
                     <Text style={{fontSize: 12, color: 'grey'}}> {this.state.msg}  </Text>
                ) : (
                    <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.text}> {item.title_ad} </Text>  
                            <Icon name="trash-o" size={20} color={'#f2611d'} onPress={() => this.setState({dialogDelete: true, idImmobile:item.id_  })}/> 
                        </View>
                    )}
                    keyExtractor={(item) => item.id_ }
                    /> 
                )}
                
                <ConfirmDialog
                    title="Deseja excluir?"
                    message="Você deseja excluir esse imóvel ?"
                    visible={this.state.dialogDelete}
                    onTouchOutside={() => this.setState({dialogDelete: false})}
                    positiveButton={{
                        title: "SIM",
                        onPress: () => this.onDeleteImmobile()
                    }}
                    negativeButton={{
                        title: "NÃO",
                        onPress: () => this.setState({dialogDelete: false})
                    }}
                />
            </ScrollView>
        </SafeAreaView>
      );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    user:{
        backgroundColor: '#C3C3C3',
        height: 200,
        alignItems: "center",
    },
    imgUser:{
        borderRadius: 45,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "#e0dede",
        flexGrow: 1,
        margin: 5,
        padding: 10
    },
    text: {
        color: "#333333"
    }
});
