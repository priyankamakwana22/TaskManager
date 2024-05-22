import {Alert, Text, View} from 'react-native';
import Strings from '../../constant/Strings';
import Global from '../../utils/Global';
import TextInputs from '../../components/textInputs/TextInputs';
import {useState} from 'react';
import Button from '../../components/button/Button';
import LinkLine from '../../components/linkLine/LinkLine';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../redux/actions/Actions';

const Register = ({navigation}) => {
  const {registerData} = useSelector(state => state.registerReducer);
  console.log('🚀 ~ Register ~ data:', registerData);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  // send to Login if user has already registered
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  //   Register user if they are new
  const registerUserOnClick = () => {
    //Validations for input fields
    if (
      userName === '' ||
      name === '' ||
      email === '' ||
      password === '' ||
      cpassword === ''
    ) {
      Alert.alert('Please fill the empty text field');
    } else if (userName.length < 2) {
      Alert.alert(
        'Warning',
        'Please enter a username which is more than 2 alphabets',
      );
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      Alert.alert('Warning', 'Email is not proper');
    } else if (password !== cpassword) {
      Alert.alert('Warning', 'Password do not match');
    } else {
      const userData = {
        id: Date.now(),
        Name: name,
        UserName: userName,
        Email: email,
        Password: password,
        CPassword: cpassword,
      };

      let newUser;
      newUser = [...registerData, userData];
      console.log('newUser', newUser);
      dispatch(registerUser(newUser));
      navigation.replace('Tasks');
    }
  };

  return (
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
        secureTextEntry={true}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <TextInputs
        placeholder={Strings.cpassword}
        secureTextEntry={true}
        value={cpassword}
        onChangeText={cpassword => setCPassword(cpassword)}
      />
      <Button title={Strings.register} onPress={() => registerUserOnClick()} />
      <LinkLine
        text={Strings.already}
        linkText={Strings.signIn}
        onPress={() => navigateToLogin()}
      />
    </View>
  );
};

export default Register;
