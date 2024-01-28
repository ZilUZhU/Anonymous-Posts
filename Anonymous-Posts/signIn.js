import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import firebase from 'firebase/app';
import { firebase } from './firebase';
// import 'firebase/auth';
// import { auth } from './firebase';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Handle successful sign-in (e.g., navigate to another screen)
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

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
