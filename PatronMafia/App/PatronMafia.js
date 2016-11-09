import React, { PureComponent } from 'react';
import {
  Text,
  View,
  Navigator,
  ScrollView,
} from 'react-native';

import SmTouchable from './components/SmTouchable';

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
          <SmTouchable style={styles.tabIconHolder} onPress={ this.switchTab("home") }>
            <Icon style={{...styles.tabIcon, ...getActiveStyle('home') }} name="home"></Icon>
          </SmTouchable>
          <SmTouchable style={styles.tabIconHolder} onPress={ this.switchTab("customize_feed") }>
            <Icon style={{ ...styles.tabIcon, ...getActiveStyle('customize_feed') }} name="sliders"></Icon>
          </SmTouchable>
          <SmTouchable style={styles.tabIconHolder} onPress={ this.switchTab("profile") }>
            <Icon style={{ ...styles.tabIcon, ...getActiveStyle('profile') }} name="user"></Icon>
          </SmTouchable>
          <SmTouchable style={styles.tabIconHolder} onPress={ this.switchTab("post_hassle") }>
            <Icon style={{...styles.tabIcon, ...styles.plusCircle, ...getActiveStyle('post_hassle'), }} name="plus-circle"></Icon>
          </SmTouchable>
        </View>

        {currentTab === 'home' && (
          <ScrollView style={{...styles.containerWrapper, ...styles.homeBG}}>
            <HomeFeed/>
          </ScrollView>
        )}
        {currentTab === 'customize_feed' && (
          <ScrollView style={styles.containerWrapper}>
            <CustomizeFeed/>
          </ScrollView>
        )}
        {currentTab === 'profile' && (
          <ScrollView style={styles.containerWrapper}>
            <Profile/>
          </ScrollView>
        )}
        {currentTab === 'post_hassle' && (
          <ScrollView style={styles.containerWrapper}>
            <PostHassle/>
          </ScrollView>
        )}

      </View>
    )
  }
}
