import * as React from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native';
import * as Speech from 'expo-speech'

export default class App extends React.Component{
constructor(){
  super();
  this.state ={
  text:""
  }
}
Speak=()=>{
var thingsToSay = this.state.text;
      Speech.speak(thingsToSay)
}
displayAlert=()=>{
alert('Please Type Something')
}

  render(){
    return(
    <View style={styles.container}>
     <Text style={[styles.buttonText,{ marginTop:200,}]}> Text to Speech </Text>
    <TextInput style={styles.inputBox}
    onChangeText={text=>{
      this.setState({text:text})
    }}
    value={this.state.text}
   
    />
    <TouchableOpacity style={styles.goButton}
    onPress={()=>{
      (this.state.text === null)? this.displayAlert:
      this.Speak();
    }}

    
    >
    <Text style={styles.buttonText}>Go</Text>
    </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
 
backgroundColor : '#000',
},

inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
    backgroundColor:'#000',
    borderColor:'cyan',
    color:'cyan'
  },
  goButton: {
    width: '45%',
    height: 60,
    alignSelf: 'center',
    padding: 10,
    margin: 40,
    borderWidth: 1,
    backgroundColor:'#000',
    borderColor:'cyan'
  },
   buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color:'cyan',
    
  },

})





