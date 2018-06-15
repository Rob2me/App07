import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import styles from '../global_conf/styles';

const prueba = require("../imgs/BTC.png")

export default class PruebasEliminable extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={prueba} style={styles.iconos} resizeMode='contain' />
      </View>
    );
  }
}
