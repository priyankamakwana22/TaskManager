import {Alert, Text, View} from 'react-native';
import Strings from '../../constant/Strings';
import Global from '../../utils/Global';
import TextInputs from '../../components/textInputs/TextInputs';
import {useState} from 'react';
import Button from '../../components/button/Button';
import LinkLine from '../../components/linkLine/LinkLine';
import {useDispatch, useSelector} from 'react-redux';
import {
  authLogin,
  registerUser,
  setLoggedInUsername,
} from '../../redux/actions/Actions';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Register = ({navigation}) => {
  const {registerData} = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  // send to Login if user has already registered
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  //   Register user if they are new
  const registerUserOnClick = () => {
    //Validations for input fields

    if (name === '') {
      Alert.alert('Name is empty', 'Please enter a valid name');
    } else if (userName === '') {
      Alert.alert('Username is empty', 'Please enter a username');
    } else if (userName.length < 2) {
      Alert.alert(
        'Warning',
        'Please enter a username which is more than 2 alphabets',
      );
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    } else if (
      registerData.length > 0 &&
      registerData.find(item => item.UserName === userName)
    ) {
      Alert.alert(
        'Warning',
        'Username already exists please enter a different username',
      );
    } else if (email === '') {
      Alert.alert('Email is empty', 'Please enter a valid email');
    } else if (
      /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/.test(email)
    ) {
      Alert.alert('Warning', 'Email is not proper');
    } else if (password === '') {
      Alert.alert('Password is empty', 'Please enter a valid password');
    } else if (cPassword === '') {
      Alert.alert('Confirm your password', 'Please enter your password again');
    } else if (password !== cPassword) {
      Alert.alert('Warning', 'Password do not match');
    } else {
      const userData = {
        id: Date.now(),
        Name: name,
        UserName: userName,
        Email: email,
        Password: password,
        CPassword: cPassword,
      };

      let newUser;
      newUser = [...registerData, userData];
      dispatch(registerUser(newUser));
      dispatch(authLogin(true));
      dispatch(setLoggedInUsername(userName));
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };

  return (
    <KeyboardAvoidingScrollView>
      <SafeAreaView>
        <ScrollView>
          <View style={Global.container}>
            <Text style={Global.title}>{Strings.welcome}</Text>
            <Text style={Global.sub_title}>{Strings.lets}</Text>
            <TextInputs
              placeholder={Strings.name}
              value={name}
              onChangeText={name => setName(name)}
            />
            <TextInputs
              placeholder={Strings.username}
              value={userName}
              onChangeText={userName => setUserName(userName)}
            />
            <TextInputs
              placeholder={Strings.email}
              value={email}
              keyboardType="email-address"
              onChangeText={email => setEmail(email)}
            />
            <TextInputs
              placeholder={Strings.password}
              value={password}
              keyboardType="password"
              onChangeText={password => setPassword(password)}
              pass={true}
            />
            <TextInputs
              placeholder={Strings.cpassword}
              value={cPassword}
              keyboardType="password"
              // secureTextEntry={true}
              onChangeText={cPassword => setCPassword(cPassword)}
              pass={true}
            />
            <Button
              title={Strings.register}
              onPress={() => registerUserOnClick()}
            />
            <LinkLine
              text={Strings.already}
              linkText={Strings.signIn}
              onPress={() => navigateToLogin()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingScrollView>
  );
};

export default Register;
