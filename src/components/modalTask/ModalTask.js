import {
  View,
  Text,
  Modal,
  Pressable,
  Alert,
  Keyboard,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Strings from '../../constant/Strings';
import {useEffect, useMemo, useState} from 'react';
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
  console.log('🚀 ~ ModalTask ~ props:', props);
  const {taskData} = useSelector(state => state.addTaskReducer);
  console.log('🚀 ~ ModalTask ~ taskData:', taskData);

  console.log(props.todoItem);
  const {registerData} = useSelector(state => state.registerReducer);
  const loggedInUsername = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [valueAssignee, setValueAssignee] = useState('');

  useEffect(() => {
    setTitle(props.todoItem?.Title);
    setDescription(props.todoItem?.Description);
    setValueAssignee(props.todoItem?.DDObject);
  }, [
    props.todoItem?.Title,
    props.todoItem?.Description,
    props.todoItem?.DDObject,
  ]);

  let updatingTaskId = props.todoItem?.id;
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

  const navigateToDashboard = () => {
    Keyboard.dismiss();
    if (title === '') {
      Alert.alert('Warning', 'Please enter your title');
    } else if (description === '') {
      Alert.alert('Warning', 'Please enter your Description');
    } else if (valueAssignee === '') {
      Alert.alert('Warning', 'Please select a assignee for the task');
    } else {
      if (props.radioButtonVisible) {
        let updatedTask = {
          id: updatingTaskId,
          Title: title,
          Description: description,
          DDValue: valueAssignee.label || taskData[updatingTaskId].DDValue,
          statusOfTask: selectedId,
          DDObject: valueAssignee,
        };

        let newTask = [...taskData];
        let index = taskData.findIndex(item => item.id === props.todoItem?.id);
        if (selectedId !== taskData[index].id) {
          newTask.splice(index, 1);
          newTask.push(updatedTask);
        } else {
          newTask[index] = updatedTask;
        }
        dispatch(addTask(newTask));
        props.setOpenModal(false);
      } else {
        if (valueAssignee === '') {
          Alert.alert('Warning', 'Please select a assignee');
        } else {
          const userTask = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            Title: title,
            Description: description,
            DDValue: valueAssignee.label,
            statusOfTask: '1',
            DDObject: valueAssignee,
          };

          let newTask;
          newTask = [...taskData, userTask];
          dispatch(addTask(newTask));
          props.setOpenModal(false);
          setDescription('');
          setTitle('');
          setValueAssignee({});
        }
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
        <View
          style={[
            styles.header,
            Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 0},
          ]}>
          <View style={styles.back_icon}>
            <Pressable
              onPress={() => {
                props.setOpenModal(false), dispatch(updateTask(false));
              }}>
              <Ionicons
                name={'chevron-back-outline'}
                size={34}
                color={Colors.WHITE}
              />
            </Pressable>
          </View>
          <View style={styles.heading}>
            {props.radioButtonVisible ? (
              <Text style={styles.heading_text}>{Strings.update_task}</Text>
            ) : (
              <Text style={styles.heading_text}>{Strings.new_task}</Text>
            )}
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
          {/* <Text>{item.name}</Text> */}
        </View>

        <View style={styles.child_comp}>
          <DropdownComponent
            dropDownValue={valueAssignee}
            setDropDown={item => setValueAssignee(item)}
            registerData={registerData}
            loggedInUsername={loggedInUsername}
          />
        </View>

        {props.radioButtonVisible ? (
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
