import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
// import WeatherDisplay from './location';

const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text>Welcome, please sign in to see all posts</Text>
            <Button
                title="Sign In"
                onPress={() => navigation.navigate('signin')}
            />
            <Button
                title="Register"
                onPress={() => navigation.navigate('register')}
            />
            {/* <WeatherDisplay/> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'NotoSans',

    },
    button: {

    }
});

export default HomeScreen;
