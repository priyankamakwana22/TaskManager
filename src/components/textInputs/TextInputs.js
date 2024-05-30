import {Image, Pressable, TextInput, View} from 'react-native';
import styles from './Style';
import Colors from '../../themes/Colors';
import Feather from 'react-native-vector-icons/Feather';

const TextInputs = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.GRAY}
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default TextInputs;
