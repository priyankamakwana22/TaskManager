import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const TaskList = () => {
  const {taskData} = useSelector(state => state.addTaskReducer);
  const {registerData} = useSelector(state => state.registerReducer);
  console.log('🚀 ~ TaskList ~ registerData:', registerData);
  console.log('🚀 ~ TaskList ~ registerData:', taskData);

  const user = taskData.DDValue === registerData.UserName;
  return (
    <View>
      {user ? (
        <FlatList
          data={taskData}
          renderItem={({item}) => (
            <View>
              <Text>{item.Title}</Text>
              <Text>{item.Description}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default TaskList;
