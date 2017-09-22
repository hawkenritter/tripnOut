import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './reducers/';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducers, applyMiddleware(logger))}>
        <View>
          <Text> HELLO LOG IN GOES HERE </Text>
        </View>
      </Provider>
    );
  }
}

export default App;