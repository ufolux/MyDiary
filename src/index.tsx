/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import MainScene from './components/MainScene';

class MyDiary extends React.Component<any, any> {
  render() {
    return (
      <Navigator initialRoute={{title: 'MyDiary', index: 0}} renderScene={(route, navigator)=>{
        return <MainScene />
      }}/>
    );
  }
}

export default MyDiary;