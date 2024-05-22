import {View, Text, Modal} from 'react-native';
import styles from './Style';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../themes/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontSize from '../../themes/FontSize';

const ModalTask = props => {
  return (
    <Modal
      visible={props.openModal}
      transparent
      onRequestClose={() => props.setOpenModal(false)}
      animationType="slide"
      hardwareAccelerated>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.BACKGROUND,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            backgroundColor: Colors.GREEN,
          }}>
          <View
            style={{
              justifyContent: 'center',
              flex: 0.2,
            }}>
            <Ionicons name={'chevron-back-outline'} size={34} color={'white'} />
          </View>
          <View
            style={{
              flex: 0.6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: FontSize.FONT_TITLE,
                color: Colors.WHITE,
                fontWeight: '500',
              }}>
              New task
            </Text>
          </View>
          <View
            style={{
              flex: 0.2,
            }}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              width: '90%',
              borderRadius: 25,
              padding: 20,
              marginTop: 20,
              height: 50,
              borderWidth: 1,
              borderColor: Colors.WHITE,
              justifyContent: 'center',
              backgroundColor: Colors.WHITE,
            }}>
            {/* <TextInput placeholder="Enter name" /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;
