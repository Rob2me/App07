import React, { Component } from "react";
import { Image, View, Text, Button, StatusBar, StyleSheet } from "react-native";
import Precio from '../Precio'; //Probablemente con un único objeto podrías hacer tanto el precio como el BoxMoneda...
import Imagenes from '../../imgs/imgs';

//Habría que crear un vector de objetos, con la clave criptoSymbol te devuelva la imagen y el texto de bajo del icono
//Y luego el BoxMoneda lo creas pasando sólo el criptoSymbol y el tipOperacion como props
//TODO he de terminar de arreglar lo de abajo del fichero imgs.js
const propiedadesBox = {
  'BTC': { imagen: Imagenes.imagen, texto: 'Bitcoin (BTC)'},
  'ETH': { imagen: require('../../imgs/ETH.png'), texto: 'Ethereum (ETH)'},
  'BCH': { imagen: require('../../imgs/BTC-Rotada.png'), texto: 'Bitcoin Cash(BCH)'}
};

export default class BoxMoneda extends React.Component {

  constructor(props) {
    super(props);
    tipOperacion = this.props.tipOperacion;
    criptoSymbol = this.props.criptoSymbol;
    //No sé pq arriba no rula si pongo 'let'

  }

  render() {
    return (
      <View style={styles.box}>
        <Image source={propiedadesBox[criptoSymbol]['imagen']} style={styles.iconos} resizeMode='contain' />
        <Text style={styles.textoIconos}>{propiedadesBox[criptoSymbol].texto}</Text>
        <Precio tipOperacion={tipOperacion} criptoSymbol={criptoSymbol} style={styles.textoIconos} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 5
  },
  iconos: {
    marginBottom: 15,
    width: '50%',
    height: '50%',
    alignSelf: 'center'
  },
  textoIconos: {
    fontSize: 16,
    alignSelf: 'center'
  }
});
