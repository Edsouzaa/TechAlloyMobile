import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [ocorrencia, setOcorrencia] = useState('');
  const [pin, setPin] = useState('');
  const [pesoCromo, setPesoCromo] = useState('');
  const [pesoNiquel, setPesoNiquel] = useState('');
  const [pesoTotal, setPesoTotal] = useState('');

  function calculaMetais(){
    const cromo = parseFloat(pesoCromo.replace(',', '.'));
    const niquel = parseFloat(pesoNiquel.replace(',', '.'));

    const total = cromo + niquel;

    setPesoTotal(total);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.app_title}>TechAlloy - Controle de Produção</Text>
      <Text style={styles.textInputTitle}>Relatório de Ocorrências:</Text>
      <TextInput
      placeholder='Digite a ocorrência aqui'
      value={ocorrencia}
      onChangeText={setOcorrencia}
      style={styles.textInput}
      />
      <Text style={styles.textInputTitle}>PIN de Segurança</Text>
      <TextInput
      placeholder='Digite seu pin'
      value={pin}
      onChangeText={setPin}
      secureTextEntry={true}
      style={styles.textInput}
      />
      <View style={styles.geralButtons}>
        <Button
        title='ENVIAR OCORRÊNCIA!'
        //onPress={}
        color='#ff4444'
        />
      </View>
      <Text style={styles.textInputTitle}>Carga de Cromo (Kg):</Text>
      <TextInput
      placeholder='0,00'
      value={pesoCromo}
      onChangeText={setPesoCromo}
      keyboardType='numeric-pad'
      style={styles.numberInput}
      />
      <Text style={styles.textInputTitle}>Carga de Níquel (Kg):</Text>
      <TextInput
      placeholder='0,00'
      value={pesoNiquel}
      onChangeText={setPesoNiquel}
      keyboardType='numeric-pad'
      style={styles.numberInput}
      />
      <Button
      title='CALCULAR TOTAL DA LIGA'
      color='#4444ff'
      onPress={calculaMetais}
      />
      <Text style={styles.calcText}>PESO TOTAL DA CARGA: {pesoTotal} Kg</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app_title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  textInputTitle: {
    color: '#3b3b3b'
  },
  textInput:{
    color: '#777777',
    backgroundColor: '#ffffff',
    padding: 3,
    borderRadius: 5,
    margin: 10,
    width: 300,
    height: 40
  },
  numberInput:{
    color: '#777777',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: 2,
    margin: 10,
    borderRadius: 5,
    width: 300,
    height: 40
  },
  calcText:{
    marginTop: 10,
    color: "#0044ff",
    fontWeight: "bold",
  },
  geralButtons: {
    margin: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
