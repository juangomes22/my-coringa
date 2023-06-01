import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'

export default function App() {
  const [fontes, setFontes] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      suaFonte: require('./assets/Geologica/static/Geologica_Auto-ExtraLight.ttf')

    });
  }
  useEffect(() => {
    loadFonts()
      .then(() => {
        setFontes(true)
      })
      .catch((error) => {
        console.log('Ocorreu um erro');
      })

  },);

  const [Somar, setSoma] = useState(0);

  const Contador = () => {
    setSoma(Somar + 1);
  };


  return (
    <View style={styles.container}>
      {fontes ?
        <Text style={{ fontFamily: 'suaFonte', fontSize: 77 }} >vasco!</Text>
        :
        <Text>oito</Text>



      }
      <View>
        <Text style={{ fontSize: 77 }} >{Somar}</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Clique para somar" onPress={Contador} />
      </View>
    


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginVertical:30,
    marginHorizontal:100,
    width:500,
    borderRadius:100,

   

  }
});


