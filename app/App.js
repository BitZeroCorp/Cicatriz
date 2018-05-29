import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import LightControl from './src/views/LightControl';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            centerComponent={{ text: 'RPiApp', style: { fontSize: 30, color: '#fff'} }}
          />
        </View>
        <LightControl />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});