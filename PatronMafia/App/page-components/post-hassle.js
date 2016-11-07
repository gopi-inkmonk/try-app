import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import {
  Button,
  FormLabel,
  FormInput,
} from 'react-native-elements';

import styles from '../styles/style.js';

export default class PostHassle extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.PageHeader}>
          <Text style={styles.PageHeaderText}>
            POST YOUR HASSLE
          </Text>
        </View>

        <View style={styles.contentContainer}>

          <FormLabel>Title of the hassel you face</FormLabel>
          <FormInput
            placeholder="Enter password"
            placeholderTextColor="#DBDBDB"
          />

          <FormLabel>Description</FormLabel>
          <FormInput
            multiline = {true}
            inputStyle={[styles.textArea]}
            placeholder="Explain the hassel you face briefly"
            placeholderTextColor="#DBDBDB"
          />

          <Button
            small
            title='POST'
            buttonStyle={styles.primaryButton}
          />
          <Button
            small
            title='RESET'
            buttonStyle={styles.secondaryButton}
            color='#E5525C'
          />
        </View>
      </View>
    );
  }
}
