import {Pressable, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './Style';
import {useState} from 'react';
import ModalTask from '../../components/modalTask/ModalTask';
import TaskTopics from '../../components/taskTopics/TaskTopics';
import {ScrollView} from 'react-native-gesture-handler';
import TaskList from '../../components/tasksList/TaskList';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const {loggedInUsername} = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  const status = useSelector(state => state.isUpdateReducer);
  console.log('🚀 ~ Dashboard ~ status:', status);

  console.log('🚀 ~ Dashboard ~ loggedInUsername:', loggedInUsername);
  const [openModal, setOpenModal] = useState(false);

  const openModalView = () => {
    setOpenModal(true);
  };

  return (
    <View style={styles.cont}>
      <ScrollView>
        <View>
          <View>
            <TaskTopics title="To do" />
            <View>
              <TaskList openModal={openModalView} />
            </View>
            <TaskTopics title="In Progress" />
            <TaskTopics title="Testing" />
            <TaskTopics title="Done" />
          </View>
        </View>
      </ScrollView>

      <Pressable style={styles.plusBtn} onPress={openModalView}>
        <FontAwesome5 name={'plus'} size={25} color={'#ffffff'} />
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
