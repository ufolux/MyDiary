/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react';
import { Navigator } from 'react-native';
import MainScene from './components/MainScene';
class MyDiary extends React.Component {
    render() {
        return (React.createElement(Navigator, { initialRoute: { title: 'MyDiary', index: 0 }, renderScene: (route, navigator) => {
                return React.createElement(MainScene, null);
            } }));
    }
}
export default MyDiary;
