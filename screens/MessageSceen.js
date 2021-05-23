import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';

const MessageScreen = () =>{
    const [data, setData] =useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setData(json))
    },[])

    return(
        <View style={styles.container}>
            
            {data.length >0 ? (<FlatList numColumns={1}
                  keyExtractor = {(item) => item.title}
                  data= {data}
                  renderItem = {({item}) =>(
                    <Text style= {styles.item} >{item.title}</Text>
                  )}/>) : <ActivityIndicator size='large' />
            }           
                
        </View>
    )

}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        padding:25,
        backgroundColor: '#547698',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '700',
        marginHorizontal:15,
        marginTop: 24,
        overflow: 'hidden',
        borderRadius: 25,
    }
});

export default MessageScreen;