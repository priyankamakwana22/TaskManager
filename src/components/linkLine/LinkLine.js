import {Pressable, Text, View} from 'react-native';
import styles from './Styles';
const LinkLine = props => {
  return (
    <View style={styles.link_view}>
      <Text style={styles.link_text1}>{props.text}</Text>
      <Pressable {...props}>
        <Text style={styles.link_text2}>{props.linkText}</Text>
      </Pressable>
    </View>
  );
};
export default LinkLine;
