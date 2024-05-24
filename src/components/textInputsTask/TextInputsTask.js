import {Text, TextInput, View} from 'react-native';
import styles from './Style';

const TextInputsTask = props => {
  console.log('🚀 ~ TextInputsTask ~ props:', props);
  return (
    <View style={styles.container}>
      <Text style={styles.input_title}>{props.title}</Text>
      <View style={styles.input_view}>
        <TextInput
          // placeholderTextColor={Colors.GRAY}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
};

export default TextInputsTask;
