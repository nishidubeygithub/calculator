import React from 'react'
import {View,Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
// import Header from './demo/Header';
import Calculator from './demo/Calculator';



const App = () => {
    return(
        <SafeAreaView style={[styles.container, {backgroundColor:'black'}]}>
          <View style={styles.container}>
            <View style ={[styles.container, {backgroundColor:'black'}]}>
              </View>
           <View style={styles.container1}> 
           
        <View style = {[styles.container, {flexDirection: 'row'}]}>
  <View style={styles.container}>
     {/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
     <Calculator name='A'/>
   {/* <Text style={styles.text}>C</Text> */}
         {/* </TouchableOpacity> */}
         </View> 
   <View style={styles.container}>
   {/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
   <Calculator name='B'/>
  {/* <Text style={styles.text}>()</Text>
    </TouchableOpacity> */}
    </View> 
<View style={styles.container}>
{/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
<Calculator name='C'/>
  {/* <Text style={styles.text}>%</Text>
    </TouchableOpacity> */}
   </View>  
<View style={[styles.container, {backgroundColor:'orange'}]}>
{/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
<Calculator name= 'D'/>
 {/* <Text style={styles.text}>/</Text>
 </TouchableOpacity> */}
  </View> 
</View>
<View style ={[styles.container, {flexDirection:'row'}]}>
<View style = {styles.container}>
 {/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
 <Calculator name ='E'/>
   {/* <Text style={styles.text}>7</Text>
   </TouchableOpacity> */}
    </View>
 <View style = {styles.container}>
{/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
<Calculator name ='F'/>
    {/* <Text style={styles.text}>8</Text>
 </TouchableOpacity> */}
  </View>
<View style = {styles.container}>
{/* <TouchableOpacity onPress={() => console.log('welcome')}> */}
<Calculator name='G'/>
     {/* ‹ */}
  </View>
<View style = {[styles.container, {backgroundColor:'orange'}]}>
<TouchableOpacity onPress={() => console.log('welcome')}>
   <Text style={styles.text}>*</Text>
 </TouchableOpacity>
   </View>
</View>
<View style = {[styles.container, {flexDirection:'row'}]}>
<View style = {styles.container}>
<TouchableOpacity onPress={() => console.log('welcome')}>
  <Text style={styles.text}>4</Text>
  </TouchableOpacity>
   </View>
<View style = {styles.container}>
<TouchableOpacity onPress={() => console.log('welcome')}>
   <Text style={styles.text}>5</Text>
     </TouchableOpacity>
     </View>
<View style = {styles.container}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
    <Text style={styles.text}>6</Text>
     </TouchableOpacity>
     </View>
<View style = {[styles.container, {backgroundColor:'orange'}]}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
   <Text style={styles.text}>-</Text>
     </TouchableOpacity>
     </View>
</View>
<View style = {[styles.container, {flexDirection:'row'}]}>
<View style = {styles.container}>
<TouchableOpacity onPress={() => console.log('welcome')}>
    <Text style={styles.text}>1</Text>
   </TouchableOpacity>
    </View>
 <View style = {styles.container}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
     <Text style={styles.text}>2</Text>
     </TouchableOpacity>
     </View>
 <View style = {styles.container}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
     <Text style={styles.text}>3</Text>
     </TouchableOpacity>
     </View>
<View style = {[styles.container, {backgroundColor:'orange'}]}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
     <Text style={styles.text}>+</Text>
     </TouchableOpacity>
     </View>
 </View>
 <View style = {[styles.container, {flexDirection:'row'}]}>
 <View style = {styles.container}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
     <Text style={styles.text}>+/-</Text>
     </TouchableOpacity>
     </View>
 <View style = {styles.container}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
<Text style={styles.text}>0</Text>
     </TouchableOpacity>
     </View>
 <View style = {styles.container}>
<TouchableOpacity onPress={() => console.log('welcome')}>
    <Text style={styles.text}>.</Text>
    </TouchableOpacity>
     </View>
<View style = {[styles.container, {backgroundColor:'orange'}]}>
 <TouchableOpacity onPress={() => console.log('welcome')}>
  <Text style={styles.text}>=</Text>
   </TouchableOpacity>
    </View>
</View>
</View>
        
        </View>
      
       </SafeAreaView>
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
    
    
    text:{
        fontsize:20,
       padding:40
    },
    
    
          
          
          
     
 })
export default App;