import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, StatusBar, LayoutAnimation} from 'react-native';
import Ionicons from '@expo/vector-icons';

const DataScreen = (props) =>{
    const [errorMessage, setErrorMessage] = useState(null);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [data, setData] = useState([{name: 'Sefer', title: 'Q&A'},
                                    {name: 'Nazmi', title: 'SW'}]);
                    

    const handleAdd = () =>{
        if(name =='' || title==''){
            setErrorMessage('Name and/or title parameter is empty!!')
        }else{
            setData(data =>[...data,{
                name: name,
                title: title
            }])
            setErrorMessage(null);
            console.log(' handle is fired', name, '-', title);
            setName('');
            setTitle('');
            showAlert();
        }
        
    }

    const handleMain = () =>{
        props.navigation.navigate('Main',{data: data});
    }

    const showAlert = () =>{
        Alert.alert(
           'The parameter is added!!'
        )
     }

     useEffect(() =>{
        console.log('Component did mount');
        return() =>{
            console.log('Component will unmount!');
        }
    },[])

    return(
    <View style ={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Text style={styles.greeting}>{`Welcome to React Native Session\n Swisscom Team`}</Text>
        <View style={styles.errorMessage} >
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>

        <View style={styles.form}>
            <View>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput style={styles.input} autoCapitalize='none' onChangeText = {name =>setName(name)} value={name}></TextInput>
            </View>

            <View style={{marginTop:32}}>
                <Text style={styles.inputTitle}>Title</Text>
                <TextInput style={styles.input} autoCapitalize='none' onChangeText = {title =>setTitle(title)} value={title}></TextInput>
            </View>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity style= {styles.button} onPress={handleAdd}>
                <Text style={{color: '#fff', fontSize: 23, fontWeight: '700'}}>Add Data</Text>
                
            </TouchableOpacity>
            
            <TouchableOpacity style= {styles.button} onPress={handleMain}>
                <Text style={{color: '#fff', fontSize: 23, fontWeight: '700'}}>Go To List</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    greeting: {
        marginTop:32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#e04040',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8a8a9a',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8a8a9e',
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:30,
        fontSize:15,
        color: '#151539'
    }, 
    button: {
        marginHorizontal: 30,
        backgroundColor: '#e9444a',
        borderRadius: 8,
        height:52,
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default DataScreen;