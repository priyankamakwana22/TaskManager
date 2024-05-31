import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../themes/Colors';
import styles from './Styles';
import Strings from '../../constant/Strings';

const DropdownComponent = ({dropDownValue, setDropDown, registerData}) => {
  const data = registerData.map(item => ({
    label: item.UserName,
    value: item.id,
  }));

  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (dropDownValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: Colors.GREEN}]}>
          {Strings.assign_to}
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
            color={isFocus ? Colors.LINK : Colors.BLACK}
            name="person"
            size={18}
          />
        )}
      />
    </View>
  );
};

export default DropdownComponent;
