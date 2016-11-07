import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Modal,
  Navigator,
} from 'react-native';

import styles from '../styles/style.js';

export default class Profile extends Component {
  state = {
    expandedSection: null,
  }
  expandSection = sectionName => () => {
    const { expandedSection } = this.state
    if (expandedSection === sectionName) {
      this.setState({
        expandedSection: null
      })
    }
    else {
      this.setState({
        expandedSection: sectionName
      })
    }
  }
  render() {
    const { expandedSection } = this.state

    return (
      <View>
        <View style={styles.PageHeader}>
          <Text style={styles.PageHeaderText}>
            PROFILE
          </Text>
        </View>
        <TouchableHighlight onPress={ this.expandSection('one') }>
          <Text>Link 1</Text>
        </TouchableHighlight>
        {expandedSection === 'one' && (
          <View>
            <Text>one</Text>
          </View>
        )}
        <TouchableHighlight onPress={ this.expandSection('two') }>
          <Text>Link 2</Text>
        </TouchableHighlight>
        {expandedSection === 'two' && (
          <View>
            <Text>two</Text>
          </View>
        )}
        <TouchableHighlight onPress={ this.expandSection('three') }>
          <Text>Link 3</Text>
        </TouchableHighlight>
        {expandedSection === 'three' && (
          <View>
            <Text>three</Text>
          </View>
        )}
      </View>
    );
  }
}
