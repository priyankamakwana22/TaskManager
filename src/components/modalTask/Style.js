import {Dimensions, StyleSheet} from 'react-native';
import FontSize from '../../themes/FontSize';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: Colors.LINK,
  },
  back_icon: {
    justifyContent: 'center',
    flex: 0.2,
  },
  heading: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading_text: {
    fontSize: FontSize.FONT_HEADING,
    color: Colors.WHITE,
    fontWeight: '500',
  },
  heading_last_view: {
    flex: 0.2,
  },
  bottom_view: {alignItems: 'center'},
  child_comp: {justifyContent: 'center', alignItems: 'center', marginTop: 10},
});

export default styles;
