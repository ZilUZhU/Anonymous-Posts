import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PostsBlock from './postsBlock';
import SignIn from './signIn';
import Registration from './register';
import CreatePosts from './createPosts';
import HomeScreen from './home';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import 'react-native-gesture-handler';

import { DynamicColorIOS } from 'react-native';
// import  firebase  from './firebase';


const customContrastDynamicTextColor = DynamicColorIOS({
    dark: 'darkgray',
    light: 'lightgray',
    highContrastDark: 'black',
    highContrastLight: 'white',
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            {/* <StatusBar style='auto' /> */}
            <Stack.Navigator>
                <Stack.Screen name="home" options={{
                    title: 'Welcome',
                    headerStyle: {
                        backgroundColor: '#dae5f7',
                    },
                    headerTintColor: '#b6b3f2',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                    component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="post" options={{
                    title: 'Posts',
                    headerStyle: {
                        backgroundColor: '#dae5f7',
                    },
                    headerTintColor: '#b6b3f2',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                    component={PostsBlock}></Stack.Screen>
                <Stack.Screen name="signin" component={SignIn}></Stack.Screen>
                <Stack.Screen name="register" component={Registration}></Stack.Screen>
                <Stack.Screen name="createposts" component={CreatePosts}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: { customContrastDynamicTextColor },
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
        backgroundColor: { customContrastDynamicTextColor },
        borderRadius: 5,
    }
});

export default App;