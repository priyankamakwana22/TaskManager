import {Text, View} from 'react-native';
import Strings from '../../constant/Strings';
import Global from '../../utils/Global';
import TextInputs from '../../components/textInputs/TextInputs';
import {useState} from 'react';
import Button from '../../components/button/Button';
import LinkLine from '../../components/linkLine/LinkLine';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin} from '../../redux/actions/Actions';

const Login = ({navigation}) => {
  console.log('🚀 ~ Login ~ navigation:', navigation);
  const {registerData} = useSelector(state => state.registerReducer);
  const loggedIn = useSelector(state => state.authReducer);
  console.log('🚀 ~ Login ~ loggedIn:', loggedIn);
  console.log('🚀 ~ Login ~ registerData:', registerData);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigateToTasks = () => {
    const user = registerData.find(
      user => user.UserName === userName && user.Password === password,
    );
    console.log('sssss', user);
    if (user) {
      console.log('Login valid');
      navigation.replace('Tasks');
      dispatch(authLogin(true));
    }
  };
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
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
  );
};

export default Login;
