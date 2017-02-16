/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, StyleSheet, View, Image} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import GuidePage from './GuidePage';
import NewsDetail from './News/NewsDetail';
import NewsPage from './News/NewsPage';
import AccountPage from './Account/AccountPage';

class TabIcon extends React.Component {
  render() {
    let selectedColor = '#34A3FF';
    let deSelectedColor = 'rgb(181, 181, 181)';
    let title = this.props.title;
    let selected = this.props.selected;
    let itemImage = {
      "新闻": {
        selected: 'http://ocef2grmj.bkt.clouddn.com/first_selected.png',
        deSelected: 'http://ocef2grmj.bkt.clouddn.com/first_normal.png'
      },
      "我的": {
        selected: 'http://ocef2grmj.bkt.clouddn.com/fourth_selected.png',
        deSelected: 'http://ocef2grmj.bkt.clouddn.com/fourth_normal.png'
      }
    };

    return (
        <View style={styles.tabBarItem}>
          <Image source={{ uri: selected? itemImage[title].selected : itemImage[title].deSelected}}
                 style={styles.tabBarImage}/>
          <Text style={[{color: selected ? selectedColor :deSelectedColor}, styles.tabBatText]}>{title}</Text>
        </View>
    );
  }
}

class Project extends Component {
  render() {
    return (
        <Router>
          <Scene key="GuidePage" component={GuidePage} hideNavBar title="GuidePage" initial={this.props.launched}/>
          <Scene key="main" tabs={true} style={styles.tabBarStyle}>
            <Scene key="NewsModule" title="新闻" icon={TabIcon} initial={true}>
              <Scene key="News" component={NewsPage} title="News"/>
              <Scene key="NewsDetail" component={NewsDetail} hideTabBar title="NewsDetail"/>
            </Scene>
            <Scene key="AccountModule" title="我的" icon={TabIcon}>
              <Scene key="Mine" component={AccountPage} title="个人中心"/>
            </Scene>
          </Scene>
        </Router>
    );
  };
}
;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1
  },
  tabBarItem: {
    alignItems: 'center'
  },
  tabBatText: {
    fontSize: 10,
    marginTop: 4
  },
  tabBarImage: {
    width: 26,
    height: 26
  }
});

AppRegistry.registerComponent('Project', () => Project);