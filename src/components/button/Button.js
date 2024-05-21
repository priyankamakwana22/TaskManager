import {Pressable, Text} from 'react-native';
import styles from './Style';


const Button = props => {
  console.log("🚀 ~ Button ~ props:", props)
  return (
    <Pressable style={styles.btn} {...props} >
      <Text style={styles.btn_text} >{props.title}</Text>
    </Pressable>
  );
};

export default Button;
