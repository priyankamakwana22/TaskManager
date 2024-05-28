import {Alert, FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './Styles';
import {
  addTask,
  getTaskId,
  isUpdate,
  updateTask,
} from '../../redux/actions/Actions';

const TaskList = props => {
  const {taskData} = useSelector(state => state.addTaskReducer);
  console.log('🚀 ~ TaskList ~ taskData:', taskData);
  const {loggedInUsername} = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  const dispatch = useDispatch();

  // when a task is clicked
  const handleClickOnTodo = id => {
    // dispatch(updateTask(true));
    props.openModal();
    dispatch(getTaskId(id));
    dispatch(isUpdate(true));
    dispatch(updateTask(true));
  };

  // to delete a task
  const deleteTask = id => {
    const filteredTasks = taskData.filter(task => task.id !== id);
    dispatch(addTask(filteredTasks));
    Alert.alert('Deleted', 'Task deleted successfully');
  };

  return (
    <View>
      <FlatList
        data={props.tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          item.DDValue === loggedInUsername ? (
            <TouchableOpacity
              style={styles.touchableView}
              onPress={() => handleClickOnTodo(item.id)}>
              <View style={styles.flView}>
                <View style={styles.txtView}>
                  <Text style={styles.taskTitle}>{item.Title}</Text>
                  <Text style={styles.taskDesc}>{item.Description}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => deleteTask(item.id)}
                  style={styles.trash}>
                  <EvilIcons name={'trash'} color={'red'} size={35} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

export default TaskList;
