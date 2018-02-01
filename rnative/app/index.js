import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, Button } from 'react-native';
import Home from './pages/Home';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
        <Home/>
    );
  }
}