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
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("customize_feed") }>
            <Icon style={{ ...styles.tabIcon, ...getActiveStyle('customize_feed') }} name="sliders"></Icon>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("profile") }>
            <Icon style={{ ...styles.tabIcon, ...getActiveStyle('profile') }} name="user"></Icon>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tabIconHolder} onPress={ this.switchTab("post_hassle") }>
            <Icon style={{...styles.tabIcon, ...styles.plusCircle, ...getActiveStyle('post_hassle'), }} name="plus-circle"></Icon>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.containerWrapper}>
          {currentTab === 'home' && (
            <HomeFeed/>
          )}
          {currentTab === 'customize_feed' && (
            <CustomizeFeed/>
          )}
          {currentTab === 'profile' && (
            <Profile/>
          )}
          {currentTab === 'post_hassle' && (
            <PostHassle/>
          )}
        </ScrollView>
      </View>
    )
  }
}
