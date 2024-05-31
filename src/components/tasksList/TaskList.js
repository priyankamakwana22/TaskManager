import {Alert, FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './Styles';
import {addTask} from '../../redux/actions/Actions';

const TaskList = props => {
  const taskData = props.taskData;
  const loggedInUsername = props.loggedInUsername;

  const dispatch = useDispatch();

  // to delete a task
  const deleteTask = id => {
    Alert.alert(
      'Warning',
      'Are you sure ypu want to delete the task?',
      [
        {
          text: 'Cancel',
          // onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const filteredTasks = taskData.filter(task => task.id !== id);
            dispatch(addTask(filteredTasks));
            Alert.alert('Deleted', 'Task deleted successfully');
            // Alert.alert('Task Deleted successfully');
          },
          style: 'ok',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
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
              onPress={() => props.openModal(item)}>
              <View style={styles.flView}>
                <View style={styles.txtView}>
                  <Text numberOfLines={1} style={styles.taskTitle}>
                    {item.Title}
                  </Text>
                  <Text numberOfLines={3} style={styles.taskDesc}>
                    {item.Description}
                  </Text>
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
