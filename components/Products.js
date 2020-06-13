import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class Products extends Component {
  renderProducts = products => {
    return products.map((item, index) => {
      return (
        <View key={index} style={{ padding: 20 }}>
          <Button
            onPress={() => this.props.onPress(item) }
            title={item.name}
          />
        </View>
      );
    });
  };
  render() {
    return <View>{this.renderProducts(this.props.products)}</View>;
  }
}

export default Products;