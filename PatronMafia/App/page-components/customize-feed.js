import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Icon from '../components/Icon';
import SmTouchable from '../components/SmTouchable';
import { CheckBox } from 'react-native-elements'

import styles from '../styles/style.js';


export default class CustomizeFeed extends React.Component {
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
            CUSTOMIZE FEED BY YOUR INTEREST
          </Text>
        </View>

        <View style={styles.contentContainer}>

          <SmTouchable onPress={ this.expandSection('one') } underlayColor='#dddddd'>
            <View style={styles.customList}>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
              <Text style={styles.customListText}>Link 1</Text>
            </View>
          </SmTouchable>

          {expandedSection === 'one' && (
            <View style={styles.customListContent}>
              <CheckBox
                title='Click Here'
                checked={this.state.checked}
              />
              <CheckBox
                title='Click Here'
                checked={this.state.checked}
              />
              <CheckBox
                title='Click Here'
                checked={this.state.checked}
              />
              <CheckBox
                title='Click Here'
                checked={this.state.checked}
              />
              <CheckBox
                title='Click Here'
                checked={this.state.checked}
              />
            </View>
          )}

          <SmTouchable onPress={ this.expandSection('two') }>
            <View style={styles.customList}>
              <Icon style={styles.customListIcon} name="angle-down"></Icon>
              <Text style={styles.customListText}>Link 2</Text>
            </View>
          </SmTouchable>
          {expandedSection === 'two' && (
            <View>
              <Text>two</Text>
            </View>
          )}
          <SmTouchable onPress={ this.expandSection('three') }>
            <View style={styles.customList}>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
              <Text style={styles.customListText}>Link 3</Text>
            </View>
          </SmTouchable>
          {expandedSection === 'three' && (
            <View>
              <Text>three</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}
