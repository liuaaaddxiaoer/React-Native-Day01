/**
 * Created by liuxiaoer on 16/9/26.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TabBarIOS,
    NavigatorIOS,
    AlertIOS,
}from 'react-native';

var Home = require('./Home');
var Discover = require('./Discover');
var Calendar = require('./Calendar');
var Mine = require('./Mine');


var main = React.createClass({
    
    getInitialState(){
          return{  // 大括号返回对象
              selectedItem:'Home'
          };
    },
    onButtonClick(){
        AlertIOS.alert('ss');
    },
    render(){
        
      return(
          <TabBarIOS
              itemPositioning = {'auto'}
          >
              <TabBarIOS.Item
                  // icon = {require('../user_published_requirement.png')}
                  // systemIcon = {'more'}
                  icon = {require('../user_published_requirement.png')}
                  title = {'首页'}
                  selected = {this.state.selectedItem=='Home'}
                  onPress= {()=>this.setState({selectedItem:'Home'})}
                  badge = {"3"}
              >
                   <NavigatorIOS
                       // 导航栏底部的下划线
                       translucent = {true}
                       barTintColor = {'white'}
                       titleTextColor = {'blue'}
                       shadowHidden = {false}
                       navigationBarHidden = {false}
                       initialRoute = {
                          {
                             title:'首页',
                             component : Home,
                             // leftButtonIcon:require('../user_published_requirement.png'),
                             // leftButtonTitle:'left',
                             leftButtonSystemIcon:'play',
                             onLeftButtonPress:this.push(Discover)
                          }
                       }
                   />
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  title = {'发现'}
                  icon = {require('../user_published_requirement.png')}
                  selected = {true}
                  selected = {this.state.selectedItem=='Discover'}
                  onPress= {()=>this.setState({selectedItem:'Discover'})}
              >
                  <NavigatorIOS

                      initialRoute = {
                          {
                             title:'发现',
                             component : Discover
                          }
                       }
                  />
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  title = {'日程'}
                  icon = {require('../user_published_requirement.png')}
                  selected = {this.state.selectedItem=='Calender'}
                  onPress= {()=>this.setState({selectedItem:'Calender'})}
              >
                  <NavigatorIOS

                      initialRoute = {
                          {
                             title:'日程',
                             component : Calendar
                          }
                       }
                  />
              </TabBarIOS.Item>
              <TabBarIOS.Item
                  title = {'我的'}
                  icon = {require('../user_published_requirement.png')}
                  selected = {this.state.selectedItem=='Mine'}
                  onPress= {()=>this.setState({selectedItem:'Mine'})}
              >
                  <NavigatorIOS

                      initialRoute = {
                          {
                             title:'我的',
                             component : Mine
                          }
                       }
                  />
              </TabBarIOS.Item>
          </TabBarIOS>
      );  
    },
    
});

// 操作的是对应的view的属性
const styles = StyleSheet.create({
    itemStyle:{
        position:'absolute',
        left:0,
        backgroundColor:'red'
    }
});

module.exports = main;