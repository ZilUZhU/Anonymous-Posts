import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Dimensions } from 'react-native';
import firebase from 'firebase/app';
// import { firebase } from './firebase';
import "firebase/compat/auth";

import 'firebase/auth';
import { auth } from './firebase';
// import {firebase} from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignIn = () => {
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('post');
        
      })
      .catch((error) => {
        setErrorMessage(error.message);
        alert(errorMessage)
      });
  };
  // const handleSignIn = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth,email, password).then((response) => {
  //       const uid = response.user.uid
  //       const usersRef = firebase.firestore().collection('users')
  //       usersRef
  //           .doc(uid)
  //           .get()
  //           .then(firestoreDocument => {
  //               if (!firestoreDocument.exists) {
  //                   alert("User does not exist anymore.")
  //                   return;
  //               }
  //               const user = firestoreDocument.data()
  //               navigation.navigate('Home', {user})
  //           })
  //           .catch(error => {
  //               alert(error)
  //           });
  //   });
  //     // Handle successful sign-in (e.g., navigate to another screen)
      
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   }
  // };
//   const handleSignIn = () => {
//     firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((response) => {
//             const uid = response.user.uid
//             const usersRef = firebase.firestore().collection('users')
//             usersRef
//                 .doc(uid)
//                 .get()
//                 .then(firestoreDocument => {
//                     if (!firestoreDocument.exists) {
//                         alert("User does not exist anymore.")
//                         return;
//                     }
//                     const user = firestoreDocument.data()
//                     navigation.navigate('Home', {user})
//                 })
//                 .catch(error => {
//                     alert(error)
//                 });
//         })
//         .catch(error => {
//             alert(error)
//         })
// }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style = {styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style = {styles.input}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Button style={styles.button} title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 5,
    // overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    marginLeft: windowWidth*0.1,
    marginRight: windowWidth*0.1,
    // paddingLeft: 16
},
container: {
  flex: 1,
  alignItems: 'center',
  alignContent: 'center',
  marginTop: windowHeight*0.2  
},
button: {
  backgroundColor: '#788eec',
  marginLeft: 30,
  marginRight: 30,
  marginTop: 20,
  height: 48,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: 'center'
},
});

export default SignIn;