import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList}from 'react-native';


const MainScreen = (props) =>{
    

    const handleMenu= () =>{
        props.navigation.navigate('App');
    }
    return(
    <View style={styles.container} >
        <FlatList numColumns={2}
                  keyExtractor = {(item) => item.name}
                  data= {props.navigation.state.params.data}
                  renderItem = {({item}) =>(
                    <Text style= {styles.item} >{item.name}</Text>
                  )}/>
       
       <TouchableOpacity style= {styles.button} onPress={handleMenu}>
                <Text style={{color: '#fff', fontSize: 23, fontWeight: '700'}}>MENU</Text>
                
            </TouchableOpacity>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    button: {
        marginHorizontal:30,
        marginBottom: 100,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: '#23aaaa',
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item:{
        marginTop:24,
        padding:30,
        backgroundColor: 'green',
        fontSize: 24,
        marginHorizontal:15,
        marginTop: 24
    }

})

export default MainScreen;