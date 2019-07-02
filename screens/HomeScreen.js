import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    FlatList
} from 'react-native';
import Colors from "../constants/Colors";
import { MonoText } from '../components/StyledText';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

export default class HomeScreen extends  React.Component{

  async componentWillMount(){
    this.fetchNews();
  }

  async fetchNews(){
    let response = await fetch("https://newsapi.org/v2/top-headlines?q=top&apiKey=2458ead0bce74439a6ebeb0579fafb14");
    let responseJson = await response.json();

    // console.log("news = " + JSON.stringify(responseJson.articles));

  }
render(){
    return(
        <ScrollView style={styles.container}>
          <View style={styles.newsContainer}>
            <Image style={styles.newsPicture} source={{uri:"https://i.dailymail.co.uk/1s/2019/07/02/11/15523914-0-image-a-84_1562062692520.jpg"}}></Image>
            <View style={styles.infoContainer}>
              <Text style={styles.newsTitle}>abcabahabcabahabcabahabcabahabcabahabcabahabcaba</Text>
              <Text style={styles.newsContent}>This is a very very long long text text text text text text</Text>
              <Text style={styles.publishedAt}>2019-07-02T10:41:17Z</Text>
            </View>
          </View>
          <View style={styles.newsContainer}>
            <Image style={styles.newsPicture} source={{uri:"https://i.dailymail.co.uk/1s/2019/07/02/11/15523914-0-image-a-84_1562062692520.jpg"}}></Image>
            <View style={styles.infoContainer}>
              <Text style={styles.newsTitle}>abcabahabcabahabcabahabcabahabcabahabcabahabcaba</Text>
              <Text style={styles.newsContent}>This is a very very long long text text text text text text</Text>
              <Text style={styles.publishedAt}>2019-07-02T10:41:17Z</Text>
            </View>
          </View>
          <View style={styles.newsContainer}>
            <Image style={styles.newsPicture} source={{uri:"https://i.dailymail.co.uk/1s/2019/07/02/11/15523914-0-image-a-84_1562062692520.jpg"}}></Image>
            <View style={styles.infoContainer}>
              <Text style={styles.newsTitle}>abcabahabcabahabcabahabcabahabcabahabcabahabcaba</Text>
              <Text style={styles.newsContent}>This is a very very long long text text text text text text</Text>
              <Text style={styles.publishedAt}>2019-07-02T10:41:17Z</Text>
            </View>
          </View>
          <View style={styles.newsContainer}>
            <Image style={styles.newsPicture} source={{uri:"https://i.dailymail.co.uk/1s/2019/07/02/11/15523914-0-image-a-84_1562062692520.jpg"}}></Image>
            <View style={styles.infoContainer}>
              <Text style={styles.newsTitle}>abcabahabcabahabcabahabcabahabcabahabcabahabcaba</Text>
              <Text style={styles.newsContent}>This is a very very long long text text text text text text</Text>
              <Text style={styles.publishedAt}>2019-07-02T10:41:17Z</Text>
            </View>
          </View>
        </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  newsContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor: Colors.primaryColor,
  },
  newsPicture:{
    width: responsiveWidth(20),
    height:responsiveWidth(20),
  },
  infoContainer:{
    paddingHorizontal: 15,
    alignSelf:'stretch',
    justifyContent:'space-around',
    flex:1,
  },
  newsTitle:{
    fontSize:responsiveFontSize(2),
    fontWeight: '600',
    marginBottom:responsiveHeight(1),
  },
  publishedAt:{
    marginTop:responsiveHeight(1),
    color:'#888',

  }
});
