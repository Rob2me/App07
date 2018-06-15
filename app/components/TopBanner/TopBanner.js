import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
//import {styles} from './styles';

class TopBanner extends Component{


  render() {
    return(
      <Image style={styles.topBanner} source={require('../../imgs/linkedin-header.png')} />
    )
  }
}

const styles = StyleSheet.create({
  topBanner: {
    flex: 1,
    backgroundColor: '#2A4D9A',
    margin: 0,
    padding: 0,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});


export default TopBanner;
