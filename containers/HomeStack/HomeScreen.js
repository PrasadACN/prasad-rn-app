import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Electronics"
          onPress={() => this.props.navigation.navigate('Electronics')}
        />
        <Button
          title="Books"
          onPress={() => this.props.navigation.navigate('Books')}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
