import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import SmTouchable from '../components/SmTouchable';
import styles from '../styles/style.js';
import Icon from '../components/Icon';

export default class Profile extends Component {

  render() {
    return (
      <View>
        <View style={styles.PageHeader}>
          <Text style={styles.PageHeaderText}>
            PROFILE
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.wrapperLabelWrapper}>
            <Text style={styles.wrapperLabel}>PROFILE COMPLETENESS</Text>
            <Text style={{...styles.wrapperLabel, ...styles.bold}}>50%</Text>
          </View>

          <SmTouchable>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Account</Text>
                <Text style={{...styles.statusText, ...styles.maxColor}}>PROFILE COMPLETENESS 100%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>

          <SmTouchable>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Personal Information</Text>
                <Text style={{...styles.statusText, ...styles.midColor}}>PROFILE COMPLETENESS 50%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>

          <SmTouchable>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Professional Information</Text>
                <Text style={{...styles.statusText, ...styles.midColor}}>PROFILE COMPLETENESS 50%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>

          <SmTouchable>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Other Information</Text>
                <Text style={{...styles.statusText, ...styles.minColor}}>PROFILE COMPLETENESS 0%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>
        </View>
      </View>
    );
  }
}
