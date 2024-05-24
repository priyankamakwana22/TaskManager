import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LINK,
    borderRadius: 1,
    borderColor: Colors.LINK,
    borderRadius: 30,
    width: '90%',
    marginTop: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: FontSize.FONT_SUB_TITLE,
    fontWeight: '600',
    color: Colors.WHITE,
  },
});

export default styles;
