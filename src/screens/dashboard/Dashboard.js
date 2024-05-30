import {Keyboard, Pressable, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './Style';
import {useState} from 'react';
import ModalTask from '../../components/modalTask/ModalTask';
import TaskTopics from '../../components/taskTopics/TaskTopics';
import {ScrollView} from 'react-native-gesture-handler';
import TaskList from '../../components/tasksList/TaskList';
import {useDispatch, useSelector} from 'react-redux';
import {updateTask} from '../../redux/actions/Actions';
import Global from '../../utils/Global';

import {SafeAreaProvider} from 'react-native-safe-area-context';
const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const {taskData} = useSelector(state => state.addTaskReducer);
  const todoData = taskData.filter(item => item.statusOfTask === '1');
  const {loggedInUsername} = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  let inProgressData = taskData.filter(item => item.statusOfTask === '2');
  let testingData = taskData.filter(item => item.statusOfTask === '3');
  let doneData = taskData.filter(item => item.statusOfTask === '4');

  const filterData = (data, status) => {
    data.filter(item => item.statusOfTask === status);
  };
  const dispatch = useDispatch();

  const openModalView = () => {
    Keyboard.dismiss();
    setOpenModal(true);
    dispatch(updateTask(false));
  };

  return (
    <View style={styles.cont}>
      <ScrollView style={{marginTop: 60, bottom: 60}}>
        <View>
          <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 20}}>
            {loggedInUsername}'s Tasks
          </Text>
          <View>
            <TaskTopics title="To do" />
            <TaskList openModal={openModalView} tasks={todoData} />
            <TaskTopics title="In Progress" />
            <TaskList openModal={openModalView} tasks={inProgressData} />
            <TaskTopics title="Testing" />
            <TaskList openModal={openModalView} tasks={testingData} />
            <TaskTopics title="Done" />
            <TaskList openModal={openModalView} tasks={doneData} />
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.plusBtn} onPress={openModalView}>
        <FontAwesome5 name={'plus'} size={25} color={'#ffffff'} />
      </Pressable>
      {/* <SafeAreaProvider> */}
      <ModalTask
        openModal={openModal}
        setOpenModal={setOpenModal}
        openModalView={openModalView}
      />
      {/* </SafeAreaProvider> */}
    </View>
  );
};

export default Dashboard;
