import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../themes/Colors';
import FontSize from '../../themes/FontSize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  centered_view: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell_modal: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
  },
  bell_body: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bell_buttons: {
    flexDirection: 'row',
    height: 50,
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  bell_input: {
    width: 50,
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  hint : {
    fontSize: FontSize.FONT_PLACEHOLDER,
    color: Colors.GRAY,
    
  }
});

export default styles;
