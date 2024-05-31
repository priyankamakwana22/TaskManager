import {Keyboard, Pressable, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './Style';
import {useState} from 'react';
import ModalTask from '../../components/modalTask/ModalTask';
import TaskTopics from '../../components/taskTopics/TaskTopics';
import {ScrollView} from 'react-native-gesture-handler';
import TaskList from '../../components/tasksList/TaskList';
import {useDispatch, useSelector} from 'react-redux';
import Strings from '../../constant/Strings';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTodoItem, setSelectedTodoItem] = useState({});
  const [radioButtonVisible, setRadioButtonVisible] = useState(false);

  const {taskData} = useSelector(state => state.addTaskReducer);
  const todoData = taskData.filter(item => item.statusOfTask === '1');

  const {loggedInUsername} = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  let inProgressData = taskData.filter(item => item.statusOfTask === '2');
  let testingData = taskData.filter(item => item.statusOfTask === '3');
  let doneData = taskData.filter(item => item.statusOfTask === '4');

  const filterData = status => {
    taskData.filter(item => item.statusOfTask === status);
  };
  const dispatch = useDispatch();

  const openModalView = (item, update) => {
    console.log('🚀 ~ openModalView ~ update:', update);
    console.log('🚀 ~ openModalView ~ item:', item);
    setSelectedTodoItem({});
    setRadioButtonVisible(false);
    if (item) {
      setSelectedTodoItem(item);
      setRadioButtonVisible(true);
    }
    Keyboard.dismiss();
    setOpenModal(true);
  };

  // handle click on todo

  return (
    <View style={styles.cont}>
      <ScrollView style={{marginTop: 60, bottom: 60}}>
        <View>
          <Text style={{alignSelf: 'center', marginTop: 10, fontSize: 20}}>
            {loggedInUsername}'s Tasks
          </Text>
          <View>
            <TaskTopics title={Strings.todo} />
            <TaskList
              openModal={openModalView}
              tasks={todoData}
              taskData={taskData}
              loggedInUsername={loggedInUsername}
            />
            <TaskTopics title={Strings.inProgress} />
            <TaskList
              openModal={openModalView}
              tasks={inProgressData}
              taskData={taskData}
              loggedInUsername={loggedInUsername}
            />
            <TaskTopics title={Strings.testing} />
            <TaskList
              openModal={openModalView}
              tasks={testingData}
              taskData={taskData}
              loggedInUsername={loggedInUsername}
            />
            <TaskTopics title={Strings.done} />
            <TaskList
              openModal={openModalView}
              tasks={doneData}
              taskData={taskData}
              loggedInUsername={loggedInUsername}
            />
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.plusBtn} onPress={() => openModalView()}>
        <FontAwesome5 name={'plus'} size={25} color={'#ffffff'} />
      </Pressable>
      {/* <SafeAreaProvider> */}
      <ModalTask
        todoItem={selectedTodoItem}
        openModal={openModal}
        setOpenModal={setOpenModal}
        openModalView={openModalView}
        radioButtonVisible={radioButtonVisible}
      />
      {/* </SafeAreaProvider> */}
    </View>
  );
};

export default Dashboard;
