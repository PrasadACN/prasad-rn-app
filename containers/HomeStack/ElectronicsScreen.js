import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { electronics } from './DummyAPI';
import Products from '../../components/Products';
import { connect } from 'react-redux';

class ElectronicsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Electronics',
  };
  render() {
    return (
      <View style={styles.container}>
        <Products products={electronics} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (products) => dispatch({ type: 'ADD_TO_CART', payload: products})
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ElectronicsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
