import { Text, StyleSheet, View, TextInput, SafeAreaView} from 'react-native';
import  React, { useState } from 'react';
import { BaseButton } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const [valor1, setvalor1] = useState('');
  const [valor2, setvalor2] = useState('');
  const [resultado, setResultado] = useState(0);
  const somar = () =>{
    if (valor1 !== "" && valor2 !== ""){
    setResultado(parseFloat(valor1) + parseFloat(valor2))
    }
  };
  const sub = () =>{
    if (valor1 !== "" && valor2 !== ""){
    setResultado(parseFloat(valor1) - parseFloat(valor2))
    }
  };
  const mult = () =>{
    if (valor1 !== "" && valor2 !== ""){
    setResultado(parseFloat(valor1) * parseFloat(valor2))
    }
  };
  const div = () =>{
    if (valor1 !== "" && valor2 !== ""){
      setResultado(parseFloat(valor1) / parseFloat(valor2))
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texto}>Calcular</Text>
        <TextInput style={styles.input} onChangeText={setvalor1}></TextInput>
        <TextInput style={styles.input} onChangeText={setvalor2}></TextInput>
      </View>
      <View style={styles.containerBtn}>
        <BaseButton style={styles.btn} onPress={somar}>Somar</BaseButton>
        <BaseButton style={styles.btn} onPress={sub}>Subtrair</BaseButton>
        <BaseButton style={styles.btn} onPress={mult}>Multiplicar</BaseButton>
        <BaseButton style={styles.btn} onPress={div}>Dividir</BaseButton>
      </View>
      <View style={styles.espacoTop}>
        <Text style={styles.input}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn:{
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize:16,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#000',
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  input:{
    borderWidth:2,
    backgroundColor:'#fefae0',
    marginTop:10,
    margin: 30,
    width: 300,
    alignSelf: 'center',
    padding:10,
    fontSize:16,
    textAlign:'center',
    borderRadius:10,
  },
  texto:{
    marginTop:20,
    marginBottom: 10,
    fontStyle: 'normal',
    fontSize: 23,
    textAlign: 'center',
  },
  container:{
    flex:1,
    backgroundColor: '#fbec15',
  },
  containerBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: "center",
    justifyContent: "center",
    columnGap: 5,
  },
  espacoTop:{
    marginTop: 15,
  },
});
