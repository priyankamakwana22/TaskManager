import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  Alert,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Strings from '../../constant/Strings';
import {useMemo, useState} from 'react';
import styles from './Style';
import DropdownComponent from '../dropDownStatus/DropDownStatus';
import Button from '../button/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, isUpdate, updateTask} from '../../redux/actions/Actions';
import TextInputsTask from '../textInputsTask/TextInputsTask';
import RadioGroup from 'react-native-radio-buttons-group';
import Colors from '../../themes/Colors';

const ModalTask = props => {
  const {taskData} = useSelector(state => state.addTaskReducer);

  const {status} = useSelector(state => state.isUpdateReducer);
  const {id} = useSelector(state => state.getTaskIdReducer);
  const {update} = useSelector(state => state.updateTaskReducer);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [radioButtonVisible, setRadioButtonVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();

  if (status) {
    setRadioButtonVisible(true);
    let data = taskData.find(item => item.id === id);
    setTitle(data.Title);
    setDescription(data.Description);
    setSelectedId(data.status);
    setValue(data.DDValue);
    dispatch(isUpdate(false));
  }

  const radioButtons = useMemo(
    () => [
      {
        id: '2',
        label: 'In Progress',
        value: 'In Progress',
      },
      {
        id: '3',
        label: 'Testing',
        value: 'Testing',
      },
      {
        id: '4',
        label: 'Done',
        value: 'Done',
      },
    ],
    [],
  );

  const navigation = useNavigation();
  const navigateToDashboard = () => {
    Keyboard.dismiss();
    if (title === '') {
      Alert.alert('Please enter your title');
    } else if (description === '') {
      Alert.alert('Please enter your title');
    } else {
      if (update) {
        let updatedTask = {
          id: id,
          Title: title,
          Description: description,
          DDValue: value || value.label,
          statusOfTask: selectedId,
        };

        let newTask = [...taskData];
        let index = taskData.findIndex(item => item.id === id);
        if (selectedId !== taskData[index].selectedId) {
          newTask.splice(index, 1);
          newTask.push(updatedTask);
        } else {
          newTask[index] = updatedTask;
        }
        dispatch(addTask(newTask));
        navigation.replace('Tasks');
        setRadioButtonVisible(false);
        dispatch(updateTask(false));
      } else {
        const userTask = {
          id: Date.now().toString(36) + Math.random().toString(36).substr(2),
          Title: title,
          Description: description,
          DDValue: value.label,
          statusOfTask: '1',
        };

        let newTask;
        newTask = [...taskData, userTask];
        dispatch(addTask(newTask));
        navigation.replace('Tasks');
        dispatch(isUpdate(false));
        setRadioButtonVisible(false);
      }
    }
  };

  return (
    <Modal
      visible={props.openModal}
      transparent
      onRequestClose={() => [
        props.setOpenModal(false),
        dispatch(updateTask(false)),
      ]}
      animationType="slide"
      hardwareAccelerated>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.back_icon}>
            <Pressable
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{name: 'Tasks'}],
                });
                dispatch(updateTask(false));
              }}>
              <Ionicons
                name={'chevron-back-outline'}
                size={34}
                color={'white'}
              />
            </Pressable>
          </View>
          <View style={styles.heading}>
            <Text style={styles.heading_text}>{Strings.new_task}</Text>
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
          <DropdownComponent
            dropDownValue={value}
            setDropDown={item => setValue(item)}
          />
        </View>

        {radioButtonVisible ? (
          <RadioGroup
            containerStyle={{
              flexDirection: 'row',
              marginLeft: 10,
              marginTop: 10,
            }}
            labelStyle={{color: Colors.BLACK}}
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          />
        ) : null}
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
