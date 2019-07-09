import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import Colors from "./constants/Colors";
export default class App extends  React.Component{
    render(){
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primaryColor,
    paddingTop:40,
  },
});
