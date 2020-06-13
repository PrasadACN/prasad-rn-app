import React, {Component} from 'react'; 
import { View, Text, StyleSheet, Button ,TouchableOpacity ,Image, AppRegistry, Dimensions  } from 'react-native';  
import { createAppContainer, DrawerNavigator } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';  
//import Home from './components/Home';
//import LoginUser from './LoginUser';
import Login from './Login';
import SignUp from './components/SignUp';
//import HomeScreen from './HomeScreen';
import { Card } from 'react-native-paper';
//import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';
//import { AppLoading, SplashScreen } from 'expo';
//import MainScreenNavigator from './components/MainScreenNavigator';
//import SideBar from './components/SideBar';
//import Router from './router';

 
class MainScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text style={ {fontSize:30, fontWeight: 'bold', textAlign:'center', margin:34} }>
                      Home Screen
                </Text>
                <Image source={require('./best-buy-black-friday-2018.jpeg')} style={{ width: 305, height: 259 }} />
                <Text style={styles.paragraph}> 
                    Welcome to BestBuy APP
                </Text>  
                <TouchableOpacity 
                     onPress={() => this.props.navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Lets Get Started</Text>
                </TouchableOpacity>
            </View> 
        );  
    }  
}  
class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
            </View>  
    );  
    }  
}  
  
const AppNavigator = createStackNavigator(  
    {  
        Home: 
        {
          screen: MainScreen,  
        },
        Login: 
        {
          screen: Login, 
        },
         SignUp: 
        {
          screen: SignUp, 
        },
      },  
    {  
        initialRouteName: "Home",
                 
    }  
);  

  
const AppContainer = createAppContainer(AppNavigator); 
 
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
} 

const styles = StyleSheet.create({
 
  paragraph: {
    margin: 34,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }, 
});