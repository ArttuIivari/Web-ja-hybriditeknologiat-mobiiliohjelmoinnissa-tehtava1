import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';




export default function App() {
  
  const [age, setAge] = useState('');
  const [lowerHeartRate, setLowerHeartRate] = useState('');
  const [UpperHeartRate, setUpperHeartRate] = useState('');
  

  const convert = () =>{
    const lower = (220 - age) * 0.65
    const upper = (220 - age) * 0.85

    setLowerHeartRate(lower);
    setUpperHeartRate(upper);
  }

  return (
    <View style={styles.container}>
      

      <Text>Age</Text>
      <TextInput 
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text>Limits</Text>
      <Text>{lowerHeartRate}-{UpperHeartRate}</Text>
      <Button title="Calculate" onPress={convert}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
