import {Text, View} from 'react-native';
import Strings from '../../constant/Strings';
import Global from '../../utils/Global';
import TextInputs from '../../components/textInputs/TextInputs';
import {useState} from 'react';
import Button from '../../components/button/Button';
import LinkLine from '../../components/linkLine/LinkLine';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const navigateToTasks = () => {
    navigation.replace('Tasks');
  };

  const navigateToLogin = () => {
    navigation.replace('Login');
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
      <Button title={Strings.register} onPress={navigateToTasks} />
      <LinkLine
        text={Strings.already}
        linkText={Strings.signIn}
        onPress={navigateToLogin}
      />
    </View>
  );
};

export default Register;
