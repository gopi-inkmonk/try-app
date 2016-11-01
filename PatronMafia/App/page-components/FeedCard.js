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
              <Svg width="24" height="18" viewBox="0 0 24 18">
                <Path
                  fill="#52545B"
                  fill-rule="evenodd"
                  d="M22.5249844,9.88922917 L23.1642136,9.25 L22.9142136,9 L23.1642136,8.75 L22.5249844,8.11077083 L22.5249844,8 L22.4142136,8 L15.9571068,1.54289322 L15.25,0.835786438 L13.8357864,2.25 L14.5428932,2.95710678 L19.5857864,8 L1.5,8 L0.5,8 L0.5,10 L1.5,10 L19.5857864,10 L14.5428932,15.0428932 L13.8357864,15.75 L15.25,17.1642136 L15.9571068,16.4571068 L22.4142136,10 L22.5249844,10 L22.5249844,9.88922917 Z"
                />
              </Svg>
              <Text style={{...styles.feedBtnText}}>IGNORE THIS HASSEL</Text>
            </View>

            <View style={{...styles.feedBtn, ...styles.feedBtnPrimary}}>
              <Text style={{...styles.feedBtnText, ...styles.feedBtnTextPrimary}}>IGNORE THIS HASSEL</Text>
              <Svg width="24" height="18" viewBox="0 0 24 18">
                <Path
                  fill="#E5525C"
                  fill-rule="evenodd"
                  d="M22.5249844,9.88922917 L23.1642136,9.25 L22.9142136,9 L23.1642136,8.75 L22.5249844,8.11077083 L22.5249844,8 L22.4142136,8 L15.9571068,1.54289322 L15.25,0.835786438 L13.8357864,2.25 L14.5428932,2.95710678 L19.5857864,8 L1.5,8 L0.5,8 L0.5,10 L1.5,10 L19.5857864,10 L14.5428932,15.0428932 L13.8357864,15.75 L15.25,17.1642136 L15.9571068,16.4571068 L22.4142136,10 L22.5249844,10 L22.5249844,9.88922917 Z"
                />
              </Svg>
            </View>

          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
