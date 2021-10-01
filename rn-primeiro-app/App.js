import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState ('testando se funfou');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Mudar a Mensagem" onPress={() => setOutputText ('É ..... funfou mesmo!')} />
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
