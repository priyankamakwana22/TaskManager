import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 5,
    height: 60,
    width: 200,
    borderRadius: 10,
    margin: 20,
    backgroundColor: Colors.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
    flexDirection: 'row',
    gap: 15,
  },
  btn_text: {
    color: Colors.WHITE,
    fontSize: FontSize.FONT_BUTTON,
    fontWeight: '600',
  },
  
});

export default styles;
