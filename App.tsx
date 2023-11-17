import React from 'react';
import Header from './src/components/Header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="My Todo App" />
      <View>
        <Text>Todo App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
