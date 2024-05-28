import {View, Text, Modal, TextInput, Pressable, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Strings from '../../constant/Strings';
import {useEffect, useMemo, useState} from 'react';
import styles from './Style';
import DropdownComponent from '../dropDownStatus/DropDownStatus';
import Button from '../button/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, isUpdate} from '../../redux/actions/Actions';
import TextInputsTask from '../textInputsTask/TextInputsTask';
import RadioGroup from 'react-native-radio-buttons-group';
import Colors from '../../themes/Colors';

const ModalTask = props => {
  const {taskData} = useSelector(state => state.addTaskReducer);
  const {status} = useSelector(state => state.isUpdateReducer);
  const {id} = useSelector(state => state.getTaskIdReducer);
  console.log('🚀 ~ ModalTask ~ id:', id);
  console.log('🚀 ~ ModalTask ~ status:', status);
  // console.log('🚀 ~ ModalTask ~ registerData:', registerData);
  console.log('🚀 ~ ModalTask ~ taskData:', taskData);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [radioButtonVisible, setRadioButtonVisible] = useState(false);

  if (status) {
    setRadioButtonVisible(true);
    dispatch(isUpdate(false));
    let data = taskData.find(item => item.id === id);
    console.log('🚀 ~ ModalTask ~ data:', data);
    setTitle(data.Title);
    setDescription(data.Description);
  }

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'In Progress',
        value: 'In Progress',
      },
      {
        id: '2',
        label: 'Testing',
        value: 'Testing',
      },
      {
        id: '3',
        label: 'Done',
        value: 'Done',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState();

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
        DDValue: value.label,
        status: 'todo',
      };

      let newTask;
      newTask = [...taskData, userTask];
      dispatch(addTask(newTask));
      navigation.replace('Tasks');
      dispatch(isUpdate(false));

      setRadioButtonVisible(false);
    }
  };

  return (
    <Modal
      visible={props.openModal}
      transparent
      onRequestClose={() => [
        props.setOpenModal(false),
        dispatch(isUpdate(false)),
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
                dispatch(isUpdate(false));
              }}>
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
