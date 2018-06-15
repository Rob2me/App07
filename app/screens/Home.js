import React, { Component } from "react";
import { Image, View, Text, Button, StatusBar } from "react-native";
import styles from "../global_conf/styles";
import TopBanner from "../components/TopBanner";

export default class HomePage extends React.Component {
  state = {
    isLoggedIn: false
  };
  render() {
    return (
      <View style={styles.container}>
        {/*From https://learn.handlebarlabs.com/courses/175915/lectures/2660801 min. 10 aprox. */}
        {/* <StatusBar translucent= {false} barStyle='default' style={flex: 1}/> */}
        <TopBanner />
        <View style={styles.bottomContainer}>
          {/* <Text style={styles.titulo}>Selecciona la criptomoneda con la que quieras operar</Text> */}
          <Text style={styles.titulo}>
            Selecciona el tipo de operación a realizar
          </Text>
          <View style={styles.bottomRow}>
            <View style={styles.box}>
              <Text style={styles.textoIconos}>Pulsa para</Text>
              <Button
                onPress={() => this.props.navigation.navigate("Compras")}
                title="COMPRAR"
              />
            </View>
            <View style={styles.box}>
              <Text style={styles.textoIconos}>Pulsa para</Text>
              <Button
                onPress={() => this.props.navigation.navigate("Ventas")}
                title="VENDER"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
