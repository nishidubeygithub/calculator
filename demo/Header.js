import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from "react-native";

const Header = (props) => {
    return (
        <View style= {styles.container1}>
        <View style= {styles.container2}>
            
            
            <TextInput 
            placeholder = {props.paceholder}
            style={props.style}></TextInput>
            
            </View>
            
            
            </View>
    )
 }
 const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'grey',
        borderWidth: 1,
        borderColor: 'black',
    },
    container1:{
        flex:2,
        backgroundColor:'grey',
        borderWidth: 1,
        borderColor: 'black',
    },
    
    }
 )
 export default Header;
 