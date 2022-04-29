import React from 'react' ;
import 'react-native-gesture-handler';
import Scanner from './screens/Scanner';
import Home from './screens/Home';
import Login from './components/Login';
import History from './screens/History';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator >
          {/* <Stack.Screen name="Login" component={Login}/>   */}
        <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Scanner" component={Scanner}/>
      <Stack.Screen name = "History" component={History}/> 
    </Stack.Navigator> 
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/> 
    </NavigationContainer>
  )
}