import React, {useState} from 'react';
import Header from './src/components/Header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Input from './src/components/Input';
import {colors} from './src/utils/constants';
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
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };
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
