import {View, Text, Modal, TextInput, Pressable, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Strings from '../../constant/Strings';
import {useState} from 'react';
import styles from './Style';
import DropdownComponent from '../dropDownStatus/DropDownStatus';
import Button from '../button/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../redux/actions/Actions';
import TextInputsTask from '../textInputsTask/TextInputsTask';

const ModalTask = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {taskData} = useSelector(state => state.addTaskReducer);
  const dispatch = useDispatch();
  console.log('🚀 ~ ModalTask ~ taskData:', taskData);

  const navigation = useNavigation();
  const navigateToDashboard = () => {
    if (title === '') {
      Alert.alert('Please enter your title');
    } else if (description === '') {
      Alert.alert('Please enter your title');
    } else {
      const userTask = {
        id: taskData.length + 1,
        Title: title,
        Description: description,
      };

      let newTask;
      newTask = [...taskData, userTask];
      console.log('newUser', newTask);
      dispatch(addTask(newTask));
      navigation.replace('Tasks');
    }
  };

  return (
    <Modal
      visible={props.openModal}
      transparent
      onRequestClose={() => props.setOpenModal(false)}
      animationType="slide"
      hardwareAccelerated>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.back_icon}>
            <Pressable
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Tasks'}],
                })
              }>
              <Ionicons
                name={'chevron-back-outline'}
                size={34}
                color={'white'}
              />
            </Pressable>
          </View>
          <View style={styles.heading}>
            <Text style={styles.heading_text}>New task</Text>
          </View>
          <View style={styles.heading_last_view} />
        </View>
        <View style={styles.bottom_view}>
          <TextInputsTask
            title={Strings.title}
            value={title}
            onChangeText={title => setTitle(title)}
          />
          <TextInputsTask
            title={Strings.description}
            value={description}
            onChangeText={description => setDescription(description)}
          />
        </View>
        <View style={styles.child_comp}>
          <DropdownComponent />
        </View>
        <View style={styles.child_comp}>
          <Button
            title={Strings.save_task}
            onPress={() => navigateToDashboard()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;
