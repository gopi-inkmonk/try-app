import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import styles from '../styles/style.js';

export default class CustomizeFeed extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.PageHeader}>
          <Text style={styles.PageHeaderText}>
            CUSTOMIZE FEED BY YOUR INTEREST
          </Text>
        </View>

        <Button
          small
          title='RAISED WITH ICON'
          buttonStyle={styles.primaryButton}
        />
      </View>
    );
  }
}
