import React from 'react';
import {StyleSheet} from 'react-native';

//From  /home/pc04/RN_Projects/RobRN_App01/App07-ConSegundoFetch-TodasLasCriptos.js
// (de momento lo hago todo global, luego ya tendré que ir afinando y particularizándolo por componente)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    //alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 0,
    padding: 0
  },
  bottomContainer: {
    flex: 3,
    //backgroundColor: '#33a252' VERDE
  },
  titulo: {
    flex: 0,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    /*justifyContent: 'space-around',
    alignContent: 'space-around',
    alignSelf: 'center',
    //Era mejor usar flex: 0......*/
    textAlignVertical: 'center',
    //padding: 50,
    margin: 10
    //letterSpacing: 20
  },
  bottomRow: {
    //backgroundColor: '#48d1e4', AZUL
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  box: {
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

export default styles;
