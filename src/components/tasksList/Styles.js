import {StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const styles = StyleSheet.create({
  //flatlist
  flView: {
    borderColor: Colors.LINK,
    borderWidth: 1,
    // flex: 1,
    borderRadius: 5,
    margin: 20,
    padding: 15,
    // alignItems: 'center',
    // justifyContent:'center'
  },
  listTitle: {
    fontSize: FontSize.FONT_SUB_TITLE,
    fontWeight: '500',
    color: Colors.BLACK,
  },
  listDesc: {
    fontSize: FontSize.FONT_BUTTON,
    color: Colors.BLACK,
    marginLeft: 15,
    marginTop: 10,
  },
});

export default styles;
