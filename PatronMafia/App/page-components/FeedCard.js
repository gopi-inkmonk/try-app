import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
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
import SmTouchable from '../components/SmTouchable';
import styles from '../styles/style.js';
import CustomStatusBar from '../components/CustomStatusBar'
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../components/Icon';

export default class FeedCard extends React.Component {
  state = {
    modalVisible: false,
  }
  showModal = () => {
    this.setState({
      modalVisible: true,
    })
  }
  hideModal = () => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return (
      <View style={[styles.feedThumpContainer, this.props.style]}>
        <View style={styles.feedThump}>
          <SmTouchable onPress={ this.showModal }>
            <View>
              <LinearGradient colors={['#EE88E8', '#FF72A0']} style={styles.feedThumpHeader}>
                <Text style={{ ...styles.feedContent, ...styles.feedIndus }}>TRANSPORTATION & LOGISTICS</Text>
                <Text style={{ ...styles.feedContent, ...styles.feedTitle }}>
                  Not able to see the roads when driving in the rain
                </Text>
                <Text style={{ ...styles.feedContent, ...styles.feedLink }}>
                  VIEW DETAIL
                </Text>
              </LinearGradient>
            </View>
          </SmTouchable>

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

        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{flexDirection:'column'}}>
          <CustomStatusBar/>

            <ScrollView>
             <LinearGradient colors={['#EE88E8', '#FF72A0']} style={{...styles.feedThumpHeader, ...styles.feedPopupHeader}}>
               <View>
                 <TouchableWithoutFeedback onPress={ this.hideModal }>
                   <View style={{alignItems:'flex-end'}}>
                     <Icon name="close" style={{fontSize:18, color:'#ffffff', backgroundColor: 'transparent'}}></Icon>
                   </View>
                 </TouchableWithoutFeedback>
               </View>

               <Text style={{ ...styles.feedContent, ...styles.feedIndus }}>TRANSPORTATION & LOGISTICS</Text>
               <Text style={{ ...styles.feedContent, ...styles.feedTitle }}>
                 Not able to see the roads when driving in the rain
               </Text>
             </LinearGradient>

              <View style={styles.popupContent}>
                <Text style={styles.popupFeedText}>For a bike user like me its nearly impossible to see the roads on rainy nights.</Text>
                <Text style={styles.popupFeedText}>Can’t open visor due to rain water and muds from front vehicle hits my face.</Text>
                <Text style={styles.popupFeedText}>Not able to see the roads when visor is ON due to rain water flows and opposite vehicle’s high beam light blocks the vision.</Text>
                <Text style={styles.popupFeedText}>For a bike user like me its nearly impossible to see the roads on rainy nights.</Text>
                <Text style={styles.popupFeedText}>Can’t open visor due to rain water and muds from front vehicle hits my face.</Text>
                <Text style={styles.popupFeedText}>Not able to see the roads when visor is ON due to rain water flows and opposite vehicle’s high beam light blocks the vision.</Text>
              </View>
            </ScrollView>

            <View style={styles.feedPopupFooter}>
              <Text style={{ ...styles.feedContent, ...styles.feedMeta }}>
                3000 People have this problem
              </Text>

              <SmTouchable>
                <View style={{...styles.feedBtn, ...styles.feedBtnPrimary}}>
                  <Text style={{...styles.feedBtnText, ...styles.feedBtnTextPrimary}}>
                    I Too have this hassle
                  </Text>
                </View>
              </SmTouchable>
            </View>
         </View>
        </Modal>
      </View>
    )
  }
}
