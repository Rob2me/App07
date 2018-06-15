import React, {Component} from 'react';
import {Text} from 'react-native';

function getPrecioCompra (cb) {
  fetch('https://api.bit2me.com/v1/ticker2')
    .then((response) => response.json())
    .then((responseJson) => {
      try {
        cb(responseJson.data[0].buy);
        // TODO aquí tendremos que pillar todo el data[0] y luego parsear buy o sell en función del state y/o props
      } catch (e) {
        console.log(e);
      }
    });
};

function getPrecios (criptoSymbol, cb){
  fetch('https://api.bit2me.com/v1/ticker2')
    .then((response) => response.json())
    .then((responseJson) => {
      var datos = {};
      if (criptoSymbol == 'BTC') {
        datos = responseJson.data[0];
      }else if (criptoSymbol == 'ETH') {
        datos = responseJson.data[1];
      }else if (criptoSymbol == 'BCH') {
        datos = responseJson.data[2];
      }else if (criptoSymbol == 'LTC') {
        datos = responseJson.data[3];
      }else {
        //TODO Arrojar error que esto no pué ser.
      }
      //Pruebo con el if aquí dentro, pero creo que debería de poder setear los State desde aquí en
      //lugar de delegarlo en el cb de dentro de la clase Precio
/*      if (tipOperacion == 'compra') {
        try {
          cb(datos.buy);
        } catch (e) {
          console.log(e);
        }
      }else if (tipOperacion == 'venta') {
        try{
          cb(datos.sell);
        } catch (e) {
          console.log(e);
        }
      }*/
      try {
        cb(datos);
        //console.log(datos);
      } catch (e) {
        console.log(e);
      }

    });
};

class Precio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compra: 69,
      venta: 68
    };

/*    //ALTERNATIVA 1
    setInterval(() => { //setInterval: función con dos parámetros, el primero es una función (anónima y sin parámetros en este caso)
      getPrecioCompra((precio) => {
        this.setState({compra: precio});// ¡¡¡¡¡POS ESO, NO HACÍA FALTA FUNCIÓN, SIMPLEMENTE ES SETEAR EL VALOR!!!!! (Pero lo has )
      });
    }, 2000);
*/
    //ALTERNATIVA 2
    //PRUEBA CON NUEVA FUNCIÓN getPrecio, en la que cambian los argumentos a enviar.
    setInterval(()=>{
      getPrecios(this.props.criptoSymbol, (datos) =>{
        this.setState({compra: datos.buy, venta: datos.sell});
      });
    }, 2000);
  }

  render() {
    if (this.props.tipOperacion == 'compra') {
      return <Text style={this.props.style}>1 {this.props.criptoSymbol} = {this.state.compra.toFixed(2)} EUR</Text>;
    }else{
      return <Text style={this.props.style}>1 {this.props.criptoSymbol} = {this.state.venta.toFixed(2)} EUR</Text>;
    }
  }
}

export default Precio;
