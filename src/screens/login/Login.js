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
import {SafeAreaView} from 'react-native-safe-area-context';

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
    setUserName('');
    setPassword('');
  };

  return (
    <KeyboardAvoidingScrollView>
      <SafeAreaView>
        <ScrollView>
          <View style={Global.container}>
            <Text style={Global.title}>{Strings.login}</Text>
            <Text style={Global.sub_title}>{Strings.please}</Text>

            <TextInputs
              placeholder={Strings.username}
              value={userName}
              onChangeText={userName => setUserName(userName)}
              pass={false}
            />
            <TextInputs
              placeholder={Strings.password}
              value={password}
              onChangeText={password => setPassword(password)}
              pass={true}
            />

            <Button title={Strings.login} onPress={() => navigateToTasks()} />
            <LinkLine
              text={Strings.dont}
              linkText={Strings.signUp}
              onPress={navigateToRegister}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default Login;
