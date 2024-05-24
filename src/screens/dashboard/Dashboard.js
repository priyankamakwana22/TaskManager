import {Pressable, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Global from '../../utils/Global';
import styles from './Style';
import {useState} from 'react';
import ModalTask from '../../components/modalTask/ModalTask';
import TaskTopics from '../../components/taskTopics/TaskTopics';
import {ScrollView} from 'react-native-gesture-handler';
import Colors from '../../themes/Colors';
import {Dimensions} from 'react-native';
import TaskList from '../../components/tasksList/TaskList';
import {SafeAreaView} from 'react-native-safe-area-context';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const openModalView = () => {
    setOpenModal(true);
  };

  return (
    <SafeAreaView>
      <View style={{flex: 1, backgroundColor: Colors.BACKGROUND}}>
        <ScrollView>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TaskTopics title="To do" />
            <TaskList />
            <TaskTopics title="In Progress" />
            <TaskTopics title="Testing" />
            <TaskTopics title="Done" />
          </View>
        </ScrollView>

        <Pressable style={styles.plusBtn} onPress={() => openModalView()}>
          <FontAwesome5 name={'plus'} size={25} color={'#ffffff'} />
        </Pressable>
        <ModalTask
          openModal={openModal}
          setOpenModal={setOpenModal}
          openModalView={openModalView}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
