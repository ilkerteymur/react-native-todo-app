import React from 'react';
import styles from './styles';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = ({
  // inputa ayrı ayrı propların tanıtmak
  placeholder = 'Type Something',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        // input a propların atanması
        keyboardType={keyboardType}
        placeholder={placeholder}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
