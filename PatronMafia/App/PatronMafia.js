import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import styles from './styles/style.js';
import Icon from './components/Icon';
import CustomStatusBar from './components/CustomStatusBar'

import HomeFeed from './page-components/homefeed'
import CustomizeFeed from './page-components/customize-feed'
import Profile from './page-components/profile'
import PostHassle from './page-components/post-hassle'

export default class PatronMafia extends PureComponent {
  state = {
    currentTab: 'home'
  }
  switchTab = tab => () => {
    this.setState({
      currentTab: tab
    })
  }
  render() {
    const { currentTab } = this.state
    console.log('currentTab', currentTab)
    const getActiveStyle = tab => tab === currentTab ? styles.tabActive : {}
    return (
      <View style={styles.appWrapper}>
        <CustomStatusBar/>
        <View style={styles.heroTab}>
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("home") }>
            <Icon style={{...styles.tabIcon, ...getActiveStyle('home') }} name="home"></Icon>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("sliders") }>
            <Icon style={{ ...styles.tabIcon, ...getActiveStyle('sliders') }} name="sliders"></Icon>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("user") }>
            <Icon style={{ ...styles.tabIcon, ...getActiveStyle('user') }} name="user"></Icon>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("plus-circle") }>
            <Icon style={{...styles.tabIcon, ...styles.plusCircle, ...getActiveStyle('plus-circle'), }} name="plus-circle"></Icon>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.containerWrapper}>
          {currentTab === 'home' && (
            <HomeFeed/>
          )}
          {currentTab === 'sliders' && (
            <CustomizeFeed/>
          )}
          {currentTab === 'user' && (
            <Profile/>
          )}
          {currentTab === 'plus-circle' && (
            <PostHassle/>
          )}
        </ScrollView>
      </View>
    )
  }
}
