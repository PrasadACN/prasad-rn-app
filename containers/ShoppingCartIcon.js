import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

const ShoppingCartIcon = props => (
  <View style={{ padding: 5 }}>
    <View
      style={{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        //backgroundColor: 'green',
      }}>
      <Text style={{ color: 'red' }}>{props.cartItems.length}</Text>
    </View>
    <Icon name="ios-cart" size={30} color="blue" />
  </View>
);

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

export default connect(mapStateToProps)(ShoppingCartIcon);
