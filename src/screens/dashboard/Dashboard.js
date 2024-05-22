import {Pressable, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Global from '../../utils/Global';
import styles from './Style';
import {useState} from 'react';
import ModalTask from '../../components/modalTask/ModalTask';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalView = () => {
    
    setOpenModal(true);
  };

  return (
    <View style={Global.container}>
      <Pressable style={styles.btn} onPress={() => openModalView()}>
        <Text style={styles.btn_text}>Add new task</Text>
        <FontAwesome5 name={'plus'} size={24} color={'white'} />
      </Pressable>
      <ModalTask
        openModal={openModal}
        setOpenModal={setOpenModal}
        openModalView={openModalView}
      />
    </View>
  );
};

export default Dashboard;
