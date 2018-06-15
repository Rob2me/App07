// From https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/src/screens/splashscreen/index.js
import React, { Component } from "react";
import { Image, ImageBackground, View, Text } from "react-native";
import {Button} from "native-base";

const splashscreen = require("../imgs/splash.jpg");

export default class SplashPage extends Component {
  render() {
    // eslint-disable-line class-methods-use-this
    return (
      <ImageBackground source={splashscreen} style={{ flex: 1, height: null, width: null, justifyContent: "flex-end", }}>
        <Button
          style={{ backgroundColor: "#6FAF98", alignSelf: "center" , marginBottom: 80, padding: 10}}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text>Lets Go!</Text>
        </Button>
      </ImageBackground>
    );
  }
}
