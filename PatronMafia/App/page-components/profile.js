import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  Picker,
  ScrollView,
} from 'react-native';

import {
  Button,
  FormLabel,
  FormInput,
} from 'react-native-elements';

import SmTouchable from '../components/SmTouchable';
import styles from '../styles/style.js';
import Icon from '../components/Icon';
import CustomStatusBar from '../components/CustomStatusBar'

export default class Profile extends Component {
  state = {
    openModal: null
  }
  openModal = sectionName => () => {
    this.setState({ openModal: sectionName })
  }
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

          <SmTouchable onPress={ this.openModal('ACCOUNT') }>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Account</Text>
                <Text style={{...styles.statusText, ...styles.maxColor}}>PROFILE COMPLETENESS 100%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>

          <SmTouchable onPress={ this.openModal('PERSONAL INFORMATION') }>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Personal Information</Text>
                <Text style={{...styles.statusText, ...styles.midColor}}>PROFILE COMPLETENESS 50%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>

          <SmTouchable onPress={ this.openModal('PROFESSIONAL INFORMATION') }>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Professional Information</Text>
                <Text style={{...styles.statusText, ...styles.midColor}}>PROFILE COMPLETENESS 50%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>

          <SmTouchable onPress={ this.openModal('OTHER INFORMATION') }>
            <View style={styles.customList}>
              <View style={styles.customListContentHolder}>
                <Text style={styles.customListText}>Other Information</Text>
                <Text style={{...styles.statusText, ...styles.minColor}}>PROFILE COMPLETENESS 0%</Text>
              </View>
              <Icon style={styles.customListIcon} name="angle-right"></Icon>
            </View>
          </SmTouchable>
        </View>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={!!this.state.openModal}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View>
         <CustomStatusBar/>
         <View style={styles.popupHeader}>
           <SmTouchable onPress={ this.openModal(null) }>
             <View style={styles.popupHeaderCTA}>
               <Icon style={{marginRight:5, marginTop:2}} name="angle-left"></Icon>
               <Text>Back</Text>
             </View>
           </SmTouchable>

           <View style={{...styles.PageHeader, ...styles.PageHeaderLRPD}}>
             <Text style={styles.PageHeaderText}>
               {this.state.openModal}
             </Text>
           </View>

           <SmTouchable>
             <View style={styles.popupHeaderCTA}>
                <Icon style={{marginRight:5, marginTop:2}} name="floppy-o"></Icon>
                <Text>Save</Text>
             </View>
           </SmTouchable>
         </View>

         <ScrollView>
            <View style={styles.formWrapper}>
              {this.state.openModal === 'ACCOUNT' && (
                <View>
                  <FormLabel>Gender</FormLabel>
                  <FormInput
                    placeholder="Enter password"
                    placeholderTextColor="#DBDBDB"
                  />

                  <FormLabel>Description</FormLabel>
                  <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>

                  <Button
                    small
                    title='SAVE'
                    buttonStyle={styles.primaryButton}
                  />
                  <Button
                    small
                    title='RESET'
                    buttonStyle={styles.secondaryButton}
                    color='#E5525C'
                  />
                </View>
              )}
              {this.state.openModal === 'PERSONAL INFORMATION' && (
                <Text>personal page</Text>
              )}
              {this.state.openModal === 'PROFESSIONAL INFORMATION' && (
                <Text>Professional page</Text>
              )}
              {this.state.openModal === 'OTHER INFORMATION' && (
                <Text>OTHER INFORMATION page</Text>
              )}
            </View>
          </ScrollView>

         </View>
        </Modal>
      </View>
    );
  }
}
