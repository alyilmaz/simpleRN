import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';

const MessageScreen = () =>{
    const [data, setData] =useState([]);

    useEffect(() =>{
       
    },[])

    return(
        <View style={styles.container}>
            
                
                    <ActivityIndicator size='large' />
                    
                
        </View>
    )

}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MessageScreen;