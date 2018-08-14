import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Profile from './src/Profile';

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      data: "test"
    }
  }

  change(x) {
    this.setState({data: x*10});
    return x*5;
  }

  render() {
    return (
      <View style={styles.container}>
        <Profile />
        <TextInput
          testID={'username'}
          onChangeText={(text) => this.change(text)}
          style={{ backgroundColor: 'gray', marginBottom: 15}}
          placeholder="Enter username" />
        <TextInput
            testID={'password'}
            onChangeText={(text) => this.change(text)}
            style={{ backgroundColor: 'gray'}}
            placeholder="Enter password" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
