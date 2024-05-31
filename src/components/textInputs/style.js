import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    borderRadius: 25,
    width: '90%',
    marginTop: 20,
    flex: 1,
  },
  container: {
    height: 50,
    borderWidth: 1,
    marginLeft: 20,
    flex: 0.9,
    borderColor: Colors.WHITE,
    alignSelf: 'flex-start',
  },
  input: {
    color: Colors.BLACK,
    // width: '100%',
    // paddingLeft: 35,
  },
  eye_view: {
    right: 20,

    flex: 0.1,
  },
});

export default styles;
