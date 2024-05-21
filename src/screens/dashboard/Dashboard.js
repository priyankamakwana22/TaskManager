import {Modal, Pressable, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Global from '../../utils/Global';
import styles from './Style';
import {useState} from 'react';
import Strings from '../../constant/Strings';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalView = () => {
    console.log('Opened');
    setOpenModal(true)
  }

  return (
    <View style={Global.container}>
      <Pressable style={styles.btn} onPress={() => openModalView()}>
        <Text style={styles.btn_text}>Add new task</Text>
        <FontAwesome5 name={'plus'} size={24} color={'white'} />
      </Pressable>
      <Modal
        visible={openModal}
        transparent
        onRequestClose={() => setOpenModal(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.bell_modal}>
            <View style={styles.bell_body}>
              <Text style={styles.text}>{Strings.title}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dashboard;
