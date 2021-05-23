import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

class HomeScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {data: []};
      }

 

    componentDidMount = () =>{
        fetch('https://finalspaceapi.com/api/v0/character/?limit=12')
        .then(response => response.json())
        .then(res => {
            this.setState({
                data: res
            })
    })
        .catch(err => {
            console.log("error is taken place :", err);
            })
    }
  

    render(){
        return(
            <View style={styles.container}>
                {this.state.data && this.state.data.map((item) =>{
                     <Image source={{uri: item.img_url}} />
                    console.log(item.img_url)
                })
                                           
                }
                <TouchableOpacity style= {styles.button} onPress={() =>this.props.navigation.navigate('Data')}>
                <Ionicons name="home" size= {48} color= '#234567'></Ionicons>
            </TouchableOpacity>
            <Text style={styles.one}>One</Text>
            <Text style={styles.two}>Two</Text>
            <Text style={styles.three}>Three</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#e9444a',
        borderRadius: 8,
        height:52,
        alignItems:'center',
        justifyContent: 'center'
    },
    one: {
        padding:10,
        backgroundColor: 'pink'
    },
    two:{
        padding:10,
        backgroundColor: 'blue'
    },
    three:{
        padding:10,
        backgroundColor: 'green'
    }
})

export default HomeScreen;