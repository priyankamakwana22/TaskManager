import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  plusBtn: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.LINK,
    borderRadius: 50,
    bottom: 20,
    right: 20,
    position: 'absolute',
    elevation: 10,
  },
  btn_text: {
    color: Colors.WHITE,
    fontSize: FontSize.FONT_BUTTON,
    fontWeight: '600',
  },
});

export default styles;
