import {
  StyleSheet
} from 'react-native';

import {
  BRAND_COLOR
} from '../components/constants'

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

const styles = {
  appWrapper: {
    backgroundColor:'#F1F2F7',
    flex:1,
    flexDirection:'column',
  },
  CustomStatusBar: {
    backgroundColor:'#E5525C',
    height:20,
  },
  heroTab: {
    flexDirection:'row',
    backgroundColor:'#ffffff',
  },
  tabIconHolder: {
    flex: 1,
    height:50,
  },
  tabIcon: {
    flex: 1,
    textAlign:'center',
    fontSize:18,
    padding:15,
    color:'#A8A9AD',
  },
  plusCircle: {
    color:'#E5525C'
  },
  tabActive: {
    color:'#52545B',
    backgroundColor:'#F1F2F7'
  },
  innerTabWrapper: {
    flexDirection:'row',
    paddingTop:30,
    paddingBottom:15,
  },
  innerTab: {
    flex: 1,
    paddingBottom:5,
  },
  innerTabActive: {
    borderBottomWidth:2,
    borderBottomColor:'#52545B',
    borderStyle:'solid'
  },
  innerTabText: {
    flex: 1,
    textAlign:'center',
    color:'#C6C8D0',
    fontSize:13
  },
  innerTabTextActive: {
    color:'#52545B',
  },
  container: {

  },
  containerWrapper: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  homeBG: {
    backgroundColor:'#F1F2F7',
  },
  button:{
    textAlign:'center',
    flex:1,
    paddingTop:12,
    color:'#ffffff'
  },
  btnContainer:{
    height:45,
    borderRadius:10
  },
  h1:{
    fontSize:21,
    color:"rgb(70, 81, 90)",
  },
  para:{
    fontSize:14,
    color:"rgb(121, 129, 147)",
    marginBottom:5
  },
  feedScroller: {
    flex:1,
  },
  feedThumpContainer:{
    marginBottom:15,
    marginRight:20,
    width:windowSize.width-80,
  },
  feedThumpContainerFirstChild: {
    marginLeft:40,
  },
  feedThumpContainerLastChild: {
    marginRight:40,
  },
  feedThump:{
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    overflow:'hidden',
  },
  feedContent:{
    textAlign:'center',
    color:'#ffffff',
    marginBottom:15
  },
  feedThumpHeader: {
    padding: 30,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  },
  feedThumpFooter: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:15,
    paddingBottom:30,
    borderWidth:1,
    borderTopWidth:0,
    borderColor:'#C6C8D0',
    backgroundColor:'#ffffff',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  feedIndus:{
    fontSize:12,
    fontWeight:'bold',
    marginBottom:15,
  },
  feedTitle:{
    fontSize:36,
    lineHeight:38,
    fontWeight:'bold',
    marginBottom:20,
  },
  feedMeta:{
    fontSize:13,
    color:'#C6C8D0',
    fontStyle:'italic'
  },
  feedLink:{
    fontSize:12,
    fontWeight:'bold',
    paddingBottom:5,
    marginBottom:0,
  },
  feedBtn: {
    borderRadius:10,
    borderColor:'#C6C8D0',
    borderWidth:1,
    padding:15,
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:15,
  },
  feedBtnPrimary: {
    borderColor:'#E5525C',
    marginBottom:0,
  },
  primaryButton: {
    backgroundColor:'#E5525C',
    borderRadius:10,
    marginTop:15,
    borderWidth:1,
    borderColor:'#E5525C',
  },
  secondaryButton: {
    backgroundColor:'#FFFFFF',
    borderColor:'#C6C8D0',
    borderWidth:1,
    borderRadius:10,
    marginTop:15,
  },
  feedBtnText: {
    color:'#52545B',
    paddingLeft:5,
    paddingRight:5,
    fontSize:12,
    fontWeight:'bold',
  },
  feedBtnTextPrimary: {
    color:'#E5525C',
  },
  tab: {
    // backgroundColor:'#ffffff',
    color:'#A8A9AD',
  },
  PageHeader: {
    padding:25,
    alignItems:'center',
    backgroundColor:'#F1F2F7',
  },
  PageHeaderText: {
    fontWeight:'bold',
    color:'#52545B',
  },
  contentContainer: {
    backgroundColor:'#FFFFFF',
    flex:1,
    paddingTop:25,
    paddingBottom:25,
    paddingLeft:5,
    paddingRight:5,
  },
  textArea: {
    height:100,
  },
  customList: {
    flexDirection:'row',
    padding:10,
  },
  customListIcon: {
    fontSize:16,
    width:15,
  },
  customListText: {
    fontSize:16,
    color:'#52545B',
  },
  customListContent: {
    marginLeft:15,
    marginRight:15,
  },
  customListContentHolder: {
    flex:1,
  },
  wrapperLabelWrapper: {
    marginBottom:15,
    flexDirection:'row',
    justifyContent:'center',
  },
  wrapperLabel: {
    fontSize:12,
    paddingRight:3,
    paddingLeft:3,
    color:'#52545B',
  },
  bold: {
    fontWeight:'bold',
  },
  customList: {
    flexDirection:'row',
    padding:15,
  },
  customListContentHolder: {
    flex:1,
  },
  statusText:{
    fontSize:12,
    fontWeight:'bold',
  },
  minColor:{
    color:'#E12828',
  },
  midColor:{
    color:'#E1C028',
  },
  maxColor:{
    color:'#5FC281',
  },
};

export default styles;
