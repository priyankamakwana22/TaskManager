import {Text, TextInput, View} from 'react-native';
import styles from './Style';

const TextInputsTask = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.input_title}>{props.title}</Text>
      <View style={styles.input_view}>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

export default TextInputsTask;
