import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, DynamicColorIOS} from 'react-native';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from './firebase';


// Define dynamic color outside of the StyleSheet
const customDynamicTextColor = Platform.OS === "ios"
  ? DynamicColorIOS({
      dark: "mintcream",
      light: "midnightblue",
    })
  : "midnightblue";

const PostsBlock = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postArray = [];
      querySnapshot.forEach((doc) => {
        postArray.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postArray);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const OnMakeAPost = () => {
    navigation.navigate('createposts') 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <ScrollView>
        {posts.map(post => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text>{post.content}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={OnMakeAPost}>
          <Text style={styles.buttonTitle}>Make a Post</Text>
        </TouchableOpacity>
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
    color: {customDynamicTextColor},
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
  // Define styles for button and buttonTitle if needed
});

export default PostsBlock;
