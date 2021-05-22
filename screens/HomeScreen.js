import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';

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
})

export default HomeScreen;