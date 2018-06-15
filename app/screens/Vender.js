import React, { Component } from "react";
import { Image, View, Text, Button, StatusBar } from "react-native";
import {Card, CardItem} from "native-base";
import styles from '../global_conf/styles';
import Precio from '../components/Precio';
import TopBanner from '../components/TopBanner';

export default class VentasScreen extends React.Component {
  render() {
    return (<View style={styles.container}>
      <TopBanner />
      <View style={styles.bottomContainer}>
        {/* <Text style={styles.titulo}>Selecciona la criptomoneda con la que quieras operar</Text> */}
        <Text style={styles.titulo}>Selecciona la criptomoneda que quieras vender</Text>
        <Card style={styles.bottomRow}>
          <CardItem style={styles.box}>
            <Image source={require('../imgs/BTC.png')} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Bitcoin (BTC)</Text>
            <Precio tipOperacion='venta' criptoSymbol='BTC' style={styles.textoIconos} />
          </CardItem>
          <CardItem style={styles.box}>
            <Image source={require('../imgs/ETH.png')} style={styles.iconos} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Ethereum (ETH)</Text>
            <Precio tipOperacion='venta' criptoSymbol='ETH' style={styles.textoIconos} />

          </CardItem>
          <CardItem style={styles.box}>
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
            <Precio tipOperacion='venta' criptoSymbol='BCH' style={styles.textoIconos} />
          </CardItem>
          <View style={styles.box}>
            <Image source={require('../imgs/plus-2-128.png')} style={styles.iconos} resizeMode='contain'/>
            <Text style={styles.textoIconos}>Próximamente</Text>
          </View>
        </Card>

      </View>
    </View>);
  }
}
