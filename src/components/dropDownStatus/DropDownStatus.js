import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../themes/Colors';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Styles';
import {setSelectedAssignee} from '../../redux/actions/Actions';

const DropdownComponent = () => {
  const dispatch = useDispatch();
  const {registerData} = useSelector(state => state.registerReducer);
  const {selectedValue} = useSelector(state => state.selectedAssigneeReducer);
  console.log('🚀 ~ DropdownComponent ~ selectedValue:', selectedValue);

  const data = registerData.map(item => ({
    label: item.UserName,
    value: item.id,
  }));

  const [value, setValue] = useState([]);
  // dispatch(setSelectedAssignee(value));
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: Colors.GREEN}]}>
          Assign task to
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: Colors.LINK}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select assignee' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Fontisto
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="person"
            size={18}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;
