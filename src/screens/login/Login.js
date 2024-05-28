import {Alert, Keyboard, Text, View} from 'react-native';
import Strings from '../../constant/Strings';
import Global from '../../utils/Global';
import TextInputs from '../../components/textInputs/TextInputs';
import {useState} from 'react';
import Button from '../../components/button/Button';
import LinkLine from '../../components/linkLine/LinkLine';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin, setLoggedInUsername} from '../../redux/actions/Actions';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const {registerData} = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // register a user
  const navigateToTasks = () => {
    if (userName === '') {
      Alert.alert('Warning', 'Please enter your username');
    } else if (password === '') {
      Alert.alert('Warning', 'Please enter your password');
    } else {
      const user = registerData.find(
        user => user.UserName === userName && user.Password === password,
      );
      if (user) {
        navigation.replace('Tasks');
        dispatch(authLogin(true));
        dispatch(setLoggedInUsername(userName));
      } else {
        Alert.alert('User not found', 'Please register before logging in');
      }
    }
  };
  const navigateToRegister = () => {
    Keyboard.dismiss();
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingScrollView>
      <ScrollView>
        <View style={Global.container}>
          <Text style={Global.title}>{Strings.login}</Text>
          <Text style={Global.sub_title}>{Strings.please}</Text>

          <TextInputs
            placeholder={Strings.username}
            value={userName}
            onChangeText={userName => setUserName(userName)}
          />

          <TextInputs
            placeholder={Strings.password}
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Button title={Strings.login} onPress={() => navigateToTasks()} />
          <LinkLine
            text={Strings.dont}
            linkText={Strings.signUp}
            onPress={navigateToRegister}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingScrollView>
  );
};

export default Login;
