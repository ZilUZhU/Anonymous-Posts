import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
// import firebase from 'firebase/app';
// import { firebase } from './firebase';
// import 'firebase/auth';
// import { auth } from './firebase';
// import {firebase} from './firebase'


const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  // const handleSignIn = async () => {
  //   try {
  //     await firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
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
  const handleSignIn = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    navigation.navigate('Home', {user})
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
}


  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
