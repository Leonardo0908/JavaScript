import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component{
  // variaveis globais 
  // states (disponivel no contexto da app)

  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'indeterminado',
    cor: '#bdc3c7',
  };

  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c'
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
      legenda: 'Normal',
      cor: '#2ecc71'
      });
    }else if (resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'SobrePeso',
        cor: '#f1c40f'
      });
    }else if (resultado >=30 && resultado < 40){
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22'
      });
    }else if (resultado >= 40){
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#e74c3c'
      });
    }
  }


  render(){
    return (
      <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
        <Text style={styles.legenda}> Seu IMC </Text>
        
        <View style={styles.painel}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
          style={styles.peso} 
          label="peso"
          onChangeText={valor => {
            this.setState({peso: valor.replace(',','.')});
          }}
          />
          <TextInput 
          style={styles.altura} 
          label="altura"
          onChangeText={valor => {
            this.setState({altura: valor.replace(',','.')});
          }}
          />
          <Button mode="contained" onPress={this.calcularIMC} >
            Calcular
          </Button>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
   padding: 60,
  },
  painel: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
  },
  legenda: {
    textAlign: 'center',
        fontSize: 20,
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 20,
  },
  peso: {
    marginVertical: 10,
  },
    altura: {
      marginVertical: 10,
  },
});