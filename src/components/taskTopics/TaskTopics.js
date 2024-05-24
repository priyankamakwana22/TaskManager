import {Text, View} from 'react-native';
import styles from './Styles';
const TaskTopics = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{props.title}</Text>
    </View>
  );
};

export default TaskTopics;
