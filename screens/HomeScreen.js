import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    ActivityIndicator,
    FlatList,
    SafeAreaView
} from 'react-native';
import Colors from "../constants/Colors";
import { MonoText } from '../components/StyledText';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";


export default class HomeScreen extends  React.Component{

    constructor(props){
        super(props);
        this.state={
          articles:[],
          limit : 20,
            page : 0,
            isLoading : true,
            isRefreshing : true,
        };
    }

  async componentWillMount(){
    this.fetchNews();
  }

  async fetchNews(){
        let page = this.state.page+1;
    let response = await fetch("https://newsapi.org/v2/everything?q=india&apiKey=462625234c6c484a8f39308490128df7&page="+page);
    let responseJson = await response.json();

    // console.log("news = " + JSON.stringify(responseJson.articles));
      let articles = this.state.articles;
    this.setState({
        articles : articles.concat(responseJson.articles),
        page : page,
        isLoading : false,
        isRefreshing : false,
    });
  }
    async refreshNews(){
        let page = this.state.page+1;
        this.setState({
           isRefreshing : true,
        });
        let response = await fetch("https://newsapi.org/v2/everything?q=us&apiKey=462625234c6c484a8f39308490128df7&page="+page);
        let responseJson = await response.json();


        // console.log("news = " + JSON.stringify(responseJson.articles));
        let articles = this.state.articles;
        this.setState({
            articles :responseJson.articles,
            page : page,
            isLoading : false,
            isRefreshing : false,
        });
    }



    renderNews({item}){

      return(
          <View style={styles.newsContainer}>
              <Image style={styles.newsPicture} source={{uri: item.urlToImage}}></Image>
              <View style={styles.infoContainer}>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <Text style={styles.newsContent}>{item.author}</Text>
                  <Text style={styles.publishedAt}>{item.publishedAt}</Text>
              </View>
          </View>

      );
  }
  renderList(){
      if(this.state.isLoading){
          return(
              <View style={styles.loadingContainer}>
                  <ActivityIndicator size={'large'} color={'#333'}/>
              </View>
          );
      }else {

          return (

              <FlatList
                  data={this.state.articles}
                  renderItem={this.renderNews.bind(this)}
                  onEndReached={() => this.fetchNews()}
                  keyExtractor={(data, index) => data.url}
                  onRefresh={() => this.refreshNews()}
                  refreshing={this.state.isRefreshing}
              />
          );
      }  }
render(){
    return(
        <SafeAreaView>
            <View >

                {this.renderList()}
            </View>
        </SafeAreaView>
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

  },
    loadingContainer:{
      flex:1,
        paddingTop: responsiveHeight(50),
        alignItems: 'center',
        justifyContent: 'center',
    }
});
