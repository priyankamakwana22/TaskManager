import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/register/Register';
import Dashboard from '../screens/dashboard/Dashboard';
import Login from '../screens/login/Login';
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../themes/Colors';
import {authLogin} from '../redux/actions/Actions';
import LogoutButton from '../components/logoutButton/logoutButton';
import DropdownComponent from '../components/dropDownStatus/DropDownStatus';

const Stack = () => {
  const {loggedIn} = useSelector(state => state.authReducer);
  console.log('🚀 ~ Stack ~ loggedIn:===>', loggedIn);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={loggedIn ? 'Tasks' : 'Login'}>
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
          options={{headerShown: false}}
          name="DropDown"
          component={DropdownComponent}
        />
        <Stack.Screen
          name="Tasks"
          component={Dashboard}
          options={{
            headerLeft: null,
            headerRight: () => <LogoutButton />,
            headerStyle: {
              backgroundColor: Colors.GREEN,
            },
            headerTintColor: Colors.WHITE,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
