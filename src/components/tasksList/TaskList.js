import {Alert, FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './Styles';
import {addTask, getTaskId, isUpdate} from '../../redux/actions/Actions';

const TaskList = props => {
  console.log('🚀 ~ TaskList ~ props:', props);
  const {taskData} = useSelector(state => state.addTaskReducer);
  const {loggedInUsername} = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  const {status} = useSelector(state => state.isUpdateReducer);
  const dispatch = useDispatch();
  console.log('🚀 ~ TaskList ~ status:', status);

  const {registerData} = useSelector(state => state.registerReducer);
  console.log('🚀 ~ ', taskData);
  const handleClickOnTodo = id => {
    dispatch(isUpdate(true));
    props.openModal(id);
    dispatch(getTaskId(id));
  };

  const deleteTask = id => {
    const filteredTasks = taskData.filter(task => task.id !== id);
    console.log('🚀 ~ deleteTask ~ filteredTasks:', filteredTasks);
    dispatch(addTask(filteredTasks));
    Alert.alert('Deleted', 'Task deleted successfully');
  };
  return (
    <View>
      <FlatList
        data={taskData}
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
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default TaskList;
