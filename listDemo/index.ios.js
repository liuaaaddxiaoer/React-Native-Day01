import React,{Component} from 'react';import {    AppRegistry,    StyleSheet,    View,    Text,    Image,    TabBarIOS,    NavigatorIOS,}from 'react-native';// 导入main.jsvar Main = require('./main/Main');var listD = React.createClass({  render(){    return(        <Main />    );  },});AppRegistry.registerComponent('listDemo',()=>listD);