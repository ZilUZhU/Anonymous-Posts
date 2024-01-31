import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

const CreatePosts = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async () => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title: title,
                content: content
            });
            console.log("Post submitted with ID: ", docRef.id);
            navigation.navigate('post');
        } catch (e) {
            console.error("Error adding post: ", e);
            alert(e);
        }
    };

    // const handleSubmit = () => {
    //   // Handle the submit action (e.g., send data to a server)
    //   try {
    //     const docRef = addDoc(collection(db, "posts"), {
    //       "title": title,
    //       "content": content
    //     });
    //     console.log("post submit with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding post: ", e);
    //   }
    //   console.log('Post Submitted', { title, content });
    //   navigation.navigate('post')

    // };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter title"
            />
            <Text style={styles.label}>Content</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={content}
                onChangeText={setContent}
                placeholder="Enter content"
                multiline
            />
            <Button title="Submit Post" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
});

export default CreatePosts;
