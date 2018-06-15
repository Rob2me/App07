import { StackNavigator } from 'react-navigation';

import SplashPage from '../screens/Splash';
import HomePage from '../screens/Home';
import ComprasScreen from '../screens/Comprar'
import VentasScreen from '../screens/Vender'
import PruebasEliminable from '../screens/PruebasEliminable'

export default StackNavigator({
  Splash: {
    screen: SplashPage,
    navigationOptions: {
      header: () => null
    }
  },
  Home: {
    screen: HomePage,
    navigationOptions: {
      header: () => null //Quedaba feo, así que la quito de momento (que no estoy usando bien el NativeBase)
    }
  },
  Compras: {
    screen: ComprasScreen,
    navigationOptions: {
      header: () => null //Quedaba feo, así que la quito de momento (que no estoy usando bien el NativeBase)
    }
},
 Ventas: {
   screen: VentasScreen,
   navigationOptions: {
     header: () => null //Quedaba feo, así que la quito de momento (que no estoy usando bien el NativeBase)
   }
 },
 PruebasEliminable:{
   screen: PruebasEliminable,
   navigationOptions:{
     header: () => null
   }
 }
}, {InitialRouteName: 'Splash'})
