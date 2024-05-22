import {TextInput, View} from 'react-native';
import styles from './style';
import Colors from '../../themes/Colors';

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
