import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 1,
    borderColor: Colors.WHITE,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input_title: {
    alignSelf: 'flex-start',
    fontSize: FontSize.FONT_SUB_TITLE,
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
  },
  input_view: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.WHITE_WARM,
    borderRadius: 10,
    marginTop: 5,
    width: '100%',
  },
  input: {color: Colors.BLACK, height: 50, width: '100%'},
});

export default styles;
