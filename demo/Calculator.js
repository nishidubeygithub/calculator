import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


const Calculator = (props)  => { 

  
  
    return (
    <View>
      
      <TouchableOpacity onPress={() => console.log('welcome')}>
   <Text style={styles.text}>{props.name}</Text>
         </TouchableOpacity>




             </View>
            
         
    )
}
const styles = StyleSheet.create({
  text:{
    fontSize
  }

   
   
})
export default Calculator;






