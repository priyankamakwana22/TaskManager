import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../themes/Colors';
import {useSelector} from 'react-redux';
import styles from './Styles';

const DropdownComponent = ({dropDownValue, setDropDown}) => {
  const {registerData} = useSelector(state => state.registerReducer);
  const loggedInUsername = useSelector(
    state => state.setLoggedInUsernameReducer,
  );
  const filteredData = registerData.filter(
    item => item.UserName !== loggedInUsername.loggedInUsername,
  );
  const data = filteredData.map(item => ({
    label: item.UserName,
    value: item.id,
  }));

  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (dropDownValue || isFocus) {
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
        style={[styles.dropdown, isFocus && styles.ddLink]}
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
        value={dropDownValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setDropDown(item);
          // setValue(item);
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
