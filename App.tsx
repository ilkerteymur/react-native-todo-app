import React, {useEffect, useState} from 'react';
import Header from './src/components/Header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Input from './src/components/Input';
import {colors} from './src/utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todo from './src/components/Todo';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (text === '') {
      Alert.alert('Bu Alan Boş Bırakılamaz.');
      return;
    }
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    AsyncStorage.setItem('@todos', JSON.stringify([...todos, newTodo]))
      .then(() => {
        setTodos([...todos, newTodo]);
        setText('');
      })
      .catch(err => {
        Alert.alert('Hata', 'Kayıt Esnasında Bir Hata Oluştu');
      });
  };
  useEffect(() => {
    AsyncStorage.getItem('@todos')
      .then(res => {
        if (res !== null) {
          const parsedRes = JSON.parse(res);
          setTodos(parsedRes);
        }
      })
      .catch(err => console.warn(err));
  }, []);
  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="My Todo App" />
      <Input
        onIconPress={addTodo}
        placeholder="deneme"
        hasIcon
        iconName="pluscircle"
        value={text}
        onChangeText={text => setText(text)}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>
            Henüz Kayıtlı Bir Todo Bulunmamaktır.
          </Text>
        ) : (
          <ScrollView style={styles.scroolView}>
            {todos?.map(todo => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo?.id}
                todo={todo}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,

    marginHorizontal: 20,
    marginVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  scroolView: {
    flexGrow: 1,
  },
});

export default App;
