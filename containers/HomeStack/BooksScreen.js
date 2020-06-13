import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { books } from './DummyAPI';
import { connect } from 'react-redux';
import Products from '../../components/Products';

class BooksScreen extends React.Component {
    static navigationOptions = {
    headerTitle: 'Electronics',
  };
  render() {
    return (
      <View style={styles.container}>
        <Products products={books} onPress={this.props.addItemToCart} />
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
)(BooksScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
