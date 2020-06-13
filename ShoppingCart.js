import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';

class ShoppingCart extends React.Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: 
    {
      screen: HomeScreen,
    },
    Electronics: 
    {
      screen: ElectronicsScreen,
    },
    Books: 
    {
      screen: BooksScreen,
    },
    Cart:
    {
      screen:CartScreen,
    },
}, 
{
        navigationOptions: {
            headerTitle: 'Shopping App',
            headerRight: (
                <ShoppingCartIcon />
            )
        }
})

export default ShoppingCart;
