import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button} from 'react-native';
import LoginUser from './LoginUser';

class Home extends Component {
      
      static navigationOptions =
          {
            title: 'Home',
          };

      NavigateActivityFunction = () => 
          {
            this.props.navigation.navigate('Second');
    
          }

    constructor() {
        super()
        this.state = {
            Message: 'WELCOM PPRASD YERICHERLA'
        }
    }
    changeMessage(){
        this.setState({
            Message: 'Welcome to My First React Native APP'
            
        })
    }
    
    render() {
       return (
       <View style={styles.container}> 
           <Text style={styles.paragraph}>{this.state.Message}</Text> 
           <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
           <Button 
                title = "Let's Get Started" 
                //onPress= {() => this.changeMessage()}
                onPress= {() => this.props.navigation.navigate('LoginUser')}
            />
       </View>
       )
    }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'lightgreen',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 148,
    width: 148,
  }
});
export default Home;