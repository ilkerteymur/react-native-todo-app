import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert('silme butonu', `${todo?.id} numaralı todoyu sil?`, [
      {
        text: 'Vazgeç',
      },
      {
        text: 'Sil',
        onPress: () => {
          const filteredTodos = todos.filter(item => item.id !== todo.id);
          setTodos(filteredTodos);
        },
        style: 'destructive',
      },
    ]);
  };

  const changeComplated = () => {
    Alert.alert('Tamamlandı', 'Emin misiniz ?', [
      {
        text: 'Vazgeç',
      },
      {
        text: 'İşaretle',
        onPress: () => {
          const tempArray = [];
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id) {
              tempArray.push(todos[i]);
            } else {
              const newTodo = {
                ...todo,
                completed: !todo.completed,
              };
              tempArray.push(newTodo);
            }
          }
          setTodos(tempArray);
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.complatedTitle]}>
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeComplated}>
          <Icon
            name={todo?.completed === true ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircleo" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
