import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {DynamicColorIOS, Platform} from 'react-native';

// const customDynamicTextColor = DynamicColorIOS({
//   dark: 'lightskyblue',
//   light: 'midnightblue',
// });

const PostsBlock = ({navigation}) => {
    // Dummy data for posts
    const posts = [
        { id: 1, title: 'Post 1', content: 'Content for post 1' },
        { id: 2, title: 'Post 2', content: 'Content for post 2' },
        // { id: 3, title: 'Post 3', content: 'Content for post 3' },
        // Add more posts here
    ];
    navigation.navigate('signIn')

    return (
        <View style={styles.container}>
            <Text >Posts</Text>
            <ScrollView >
                {posts.map(post => (
                    <View key={post.id} style={styles.post}>
                        <Text style={styles.postTitle}>{post.title}</Text>
                        <Text>{post.content}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color:
            Platform.OS === "ios"
              ? (customDynamicTextColor = DynamicColorIOS({
                  dark: "mintcream",
                  light: "midnightblue",
                }))
              : "midnightblue",
    },
    post: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
    },
    postTitle: {
        fontWeight: 'bold',
    },

});

export default PostsBlock;
