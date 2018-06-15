import React, { Component } from "react";
import { Image, View, Text, Button, StatusBar } from "react-native";
import styles from '../global_conf/styles';
import Precio from '../components/Precio';
import TopBanner from '../components/TopBanner';
import BoxMoneda from '../components/BoxMoneda';

export default class ComprasScreen extends React.Component {
  render() {
    return (<View style={styles.container}>
      <TopBanner />
      <View style={styles.bottomContainer}>
        {/* <Text style={styles.titulo}>Selecciona la criptomoneda con la que quieras operar</Text> */}
        <Text style={styles.titulo}>Selecciona la criptomoneda que quieras comprar</Text>

        <View style={styles.bottomRow}>
          {/* <View style={styles.box}>
            <Image source={require('../imgs/BTC.png')} style={styles.iconos} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Bitcoin (BTC)</Text>
            <Precio tipOperacion='compra' criptoSymbol='BTC' style={styles.textoIconos} />
          </View> */}
          <BoxMoneda tipOperacion='compra' criptoSymbol='BTC' />
          <View style={styles.box}>
            <Image source={require('../imgs/ETH.png')} style={styles.iconos} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Ethereum (ETH)</Text>
            <Precio tipOperacion='compra' criptoSymbol='ETH' style={styles.textoIconos} />
          </View>
          <View style={styles.box}>
            <Image source={require('../imgs/BTC.png')} style={[
                styles.iconos, {
                  transform: [
                    {
                      rotateZ: '-45deg'
                    }
                  ]
                }
              ]} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Bitcoin Cash (BCH)</Text>
            <Precio tipOperacion='compra' criptoSymbol='BCH' style={styles.textoIconos} />
          </View>
          <View style={styles.box}>
            <Image source={require('../imgs/plus-2-128.png')} style={styles.iconos} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Próximamente</Text>
          </View>
        </View>

      </View>
    </View>);
  }
}
