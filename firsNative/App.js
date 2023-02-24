/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import news_data from './news_data.json';
import NewsCard from './components/NewsCard/NewsCard';



function App(){


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.logo}>News</Text>
      </View>
      <View>
        <FlatList data={news_data}
        renderItem={({item}) =><NewsCard news ={item}></NewsCard>}
        >
          
        </FlatList>
      </View>
    </SafeAreaView>
  )


}

const styles = StyleSheet.create({

  appbar:{
    height: 80,
    backgroundColor: 'indigo',
  },

  logo:{
    margin: 15,
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold'
  },  

  container:{
    flex:1,
    backgroundColor: '#eceff1'
  },
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    paddingHorizontal: 10,
    color: '#ccc',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
