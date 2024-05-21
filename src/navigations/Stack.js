import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/register/Register';
import Dashboard from '../screens/dashboard/Dashboard';
import Login from '../screens/login/Login';
import 'react-native-gesture-handler';

const Stack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Tasks"
          component={Dashboard}
          options={{headerLeft: null,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
