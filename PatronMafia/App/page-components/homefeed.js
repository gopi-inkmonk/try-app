import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';

import FeedCard from './FeedCard'

import styles from '../styles/style.js';

export default class HomeFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.innerTabWrapper}>
            <View style={styles.innerTab}>
              <Text style={styles.innerTabText}>IGNORED (10)</Text>
            </View>
            <View style={{...styles.innerTab, ...styles.innerTabActive}}>
              <Text style={{...styles.innerTabText, ...styles.innerTabTextActive}}>NEW HASSLE (50)</Text>
            </View>
            <View style={styles.innerTab}>
              <Text style={styles.innerTabText}>ACCEPTED (20)</Text>
            </View>
          </View>

          <ScrollView horizontal={true} style={styles.feedScroller}>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
          </ScrollView>
      </View>
    );
  }
}
