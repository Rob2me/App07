import React, { Component } from "react";
import { Image, View, Text, Button, StatusBar, StyleSheet } from "react-native";
import Precio from '../Precio'; //Probablemente con un único objeto podrías hacer tanto el precio como el BoxMoneda...

const rutaImgs = '../../imgs/';

//Habría que crear un vector de objetos, con la clave criptoSymbol te devuelva la imagen y el texto de bajo del icono
//Y luego el BoxMoneda lo creas pasando sólo el criptoSymbol y el tipOperacion como props
const propiedadesBox = {
  'BTC': { imagen: 'BTC.png', texto: 'Bitcoin (BTC)'},
  'ETH': { imagen: 'ETH.png', texto: 'Ethereum (ETH)'},
  'BCH': { imagen: 'BTC-Rotada.png', texto: 'Bitcoin (BTC)'}
};
//TODO: PERO AHORA NO ME QUEDA TIEMPO DE VER CÓMO SE HACE LA ASIGNACIÓN DEL VECTOR, ASÍ QUE HAGO EL SWITCH*/

export default class BoxMoneda extends React.Component {
  imagen1 = '';
  texto = '';
  //rutaCompletaImg1 = '';

  constructor(props) {
    super(props);
    tipOperacion = this.props.tipOperacion;
    criptoSymbol = this.props.criptoSymbol;
    //No sé pq arriba no rula si pongo 'let'

    console.log(propiedadesBox['BTC']);
    console.log(propiedadesBox['BTC']['imagen']);

    imagen1 = propiedadesBox['BTC']['imagen'];
    texto = propiedadesBox['BTC']['texto'];
    //rutaCompletaImg1 = 'file:///'+rutaImgs+imagen1;
    // rutaCompletaImg1 = rutaImgs + imagen1;

    //rutaCompletaImg1=require('../../imgs/BTC.png');
    rutaCompletaImg1 = require('file:///' + rutaImgs + imagen1);
    console.log(rutaCompletaImg1);

    /*switch(criptoSymbol){
      case "BTC": let imagen = 'BTC.png', texto = 'Bitcoin (BTC)'; break;
      case "ETH": let imagen = 'ETH.png', texto = 'Ethereum (ETH)'; break;
      case "BCH": let imagen = 'BTC-Rotada.png', texto = 'Bitcoin (BCH)'; break;
    }*/
  }

  /*Los comentarios dentro del return del render de abajo lo joden todo.
  Pero los intentos que hice son estos:
  <Image source={'file:///'+rutaImgs+imagen1} style={styles.iconos} resizeMode='contain'/>
  <Image source={`require($rutaCompletaImg1)` style={styles.iconos} resizeMode='contain'} />

  */

  render() {
    return (
      <View style={styles.box}>
        <Image source={rutaCompletaImg1} style={styles.iconos} resizeMode='contain' />
        <Text style={styles.textoIconos}>{texto}</Text>
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
