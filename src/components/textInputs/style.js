import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  input: {color: Colors.BLACK, height: 50, width: '100%'},
});

export default styles;
