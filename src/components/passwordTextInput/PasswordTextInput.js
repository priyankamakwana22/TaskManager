import {Pressable, TextInput, View} from 'react-native';
import Colors from '../../themes/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import styles from './Style';

const PasswordTextInput = props => {
  const [visible, setVisible] = useState(true);

  const showPassword = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.GRAY}
        style={styles.input}
        {...props}
        secureTextEntry={visible ? false : true}
      />
      <Pressable onPress={() => showPassword()}>
        <Feather
          name={visible ? 'eye' : 'eye-off'}
          size={24}
          color={Colors.BLACK}
        />
      </Pressable>
    </View>
  );
};

export default PasswordTextInput;
