import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TaskList = props => {
  const data = [{title: 'Tiitle', description: 'DEs'}];
  return (
    <FlatList
      // nestedScrollEnabled={true}
      //   data={props.todoData}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        if (item.selectedId === props.selectedId) {
          return (
            <TouchableOpacity
            //   onPress={() => props.handleClickOnTodo(item, index)}
            >
              <View style={styles.flView}>
                <View style={{flex: 9}}>
                  <Text numberOfLines={1} style={styles.listTitle}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={3} style={styles.listDesc}>
                    {item.description}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => props.deleteTask(item.id)}>
                  <FontAwesome5 name={'trash'} size={25} color={'red'} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }
      }}
    />
  );
};

export default TaskList;
