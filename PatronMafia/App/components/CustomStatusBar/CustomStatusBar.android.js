import React from 'react';

import {
  StatusBar
} from 'react-native';

export default class CustomStatusBar extends React.Component {
  render() {
    return (
      <StatusBar
         backgroundColor="#E5525C"
         barStyle="light-content"
       />
    )
  }
}
