import {Image, Pressable, TextInput, View} from 'react-native';
import styles from './Style';
import Colors from '../../themes/Colors';
import Feather from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';

const TextInputs = props => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.pass) {
      setVisible(true);
    }
  }, [props.pass]);
  const showPassword = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        <TextInput
          secureTextEntry={visible ? true : false}
          placeholderTextColor={Colors.GRAY}
          style={styles.input}
          {...props}
        />
      </View>
      <View style={styles.eye_view}>
        {props.pass ? (
          <Pressable onPress={() => showPassword()}>
            <Feather
              name={visible ? 'eye' : 'eye-off'}
              size={24}
              color={Colors.BLACK}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default TextInputs;
