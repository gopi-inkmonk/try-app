import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    // LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import styles from '../styles/style.js';

import LinearGradient from 'react-native-linear-gradient';

export default class FeedCard extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.feedThumpContainer}>
        <View style={styles.feedThump}>
          <LinearGradient colors={['#EE88E8', '#FF72A0']} style={styles.feedThumpHeader}>
            <Text style={{ ...styles.feedContent, ...styles.feedIndus }}>TRANSPORTATION & LOGISTICS</Text>
            <Text style={{ ...styles.feedContent, ...styles.feedTitle }}>
              Not able to see the roads when driving in the rain
            </Text>
            <Text style={{ ...styles.feedContent, ...styles.feedLink }}>
              VIEW DETAIL
            </Text>
          </LinearGradient>
          <View style={styles.feedThumpFooter}>
            <Text style={{ ...styles.feedContent, ...styles.feedMeta }}>
              3000 People have this problem
            </Text>

            <View style={{...styles.feedBtn}}>
              <Text style={{...styles.feedBtnText}}>IGNORE</Text>
            </View>

            <View style={{...styles.feedBtn, ...styles.feedBtnPrimary}}>
              <Text style={{...styles.feedBtnText, ...styles.feedBtnTextPrimary}}>ACCEPT</Text>
            </View>

          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
