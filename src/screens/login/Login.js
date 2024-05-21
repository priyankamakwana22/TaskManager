import {Text, TextInput, View} from 'react-native';
import Strings from '../../constant/Strings';
import Global from '../../utils/Global';
import TextInputs from '../../components/textInputs/TextInputs';
import {useState} from 'react';
import Button from '../../components/button/Button';
import LinkLine from '../../components/linkLine/LinkLine';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigateToTasks = () => {
    navigation.navigate('Tasks');
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
      <Button title={Strings.login} onPress={navigateToTasks} />
      <LinkLine
        text={Strings.dont}
        linkText={Strings.signUp}
        onPress={navigateToRegister}
      />
    </View>
  );
};

export default Login;
