import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.GREEN,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  btn_text: {
    fontSize: FontSize.FONT_BUTTON,
    color: Colors.WHITE,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default styles;
