import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PostsBlock from './postsBlock';
import SignIn from './signIn';

import {DynamicColorIOS} from 'react-native';
import { firebase } from './firebase';

// Import the functions you need from the SDKs you need
// import firebase from '@react-native-firebase/app'
// import { initializeApp } from "@firebase/app";
// import { getAnalytics } from "@firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEvVMthlX2OdrEEvWV3l7w5et_0fLEoM",
  authDomain: "anonymous-posts-ad60d.firebaseapp.com",
  projectId: "anonymous-posts-ad60d",
  storageBucket: "anonymous-posts-ad60d.appspot.com",
  messagingSenderId: "905535572264",
  appId: "1:905535572264:web:6f12022f5cbbb38c24281d",
  measurementId: "G-JV50XZG4MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const customDynamicTextColor = DynamicColorIOS({
  dark: 'lightskyblue',
  light: 'midnightblue',
});

const customContrastDynamicTextColor = DynamicColorIOS({
  dark: 'darkgray',
  light: 'lightgray',
  highContrastDark: 'black',
  highContrastLight: 'white',
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Title?</Text>
      {/* <View style={styles.contentContainer}>
        <View style={styles.block}>
          <Text>Content Block 1</Text>
        </View>
        <View style={styles.block}>
          <Text>Content Block 2</Text>
        </View>
        <View style={styles.block}>
          <Text>Content Block 3</Text>
        </View>
      </View>
      <View style={styles.container}>
          <PostsBlock />

      </View> */}
      {/* <SignIn/> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: {customContrastDynamicTextColor},
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  block: {
    padding: 20,
    marginTop: 10,
    backgroundColor: {customContrastDynamicTextColor},
    borderRadius: 5,
  }
});

export default App;
