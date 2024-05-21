import {StyleSheet} from 'react-native';
import FontSize from '../themes/FontSize';
import Colors from '../themes/Colors';

const Global = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  title: {
    marginBottom: 10,
    fontSize: FontSize.FONT_TITLE,
    fontWeight: '500',
    color: Colors.BLACK,
  },
  sub_title: {
    marginBottom: 40,
    fontSize: FontSize.FONT_SUB_TITLE,
    fontWeight: '400',
    letterSpacing: 0.5,
    color: Colors.BLACK,
  },
});

export default Global;
