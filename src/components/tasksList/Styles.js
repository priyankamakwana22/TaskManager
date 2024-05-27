import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  touchableView: {
    flex: 1,
  },
  flView: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.LIGHT_GREEN,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  txtView: {flex: 0.9},
  taskTitle: {
    color: Colors.BLACK,
    fontSize: FontSize.FONT_TITLE,
  },
  taskDesc: {
    color: Colors.BLACK,
    fontSize: FontSize.FONT_SUB_TITLE,
  },
  trash: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
