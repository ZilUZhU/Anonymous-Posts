import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import "firebase/compat/auth";

import 'firebase/auth';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

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
      <TouchableOpacity style={styles.button}  onPress={handleSignIn} >
      <Text style={styles.buttonTitle}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    marginLeft: windowWidth*0.1,
    marginRight: windowWidth*0.1,
},
container: {
  flex: 1,
  alignItems: 'center',
  alignContent: 'center',
  marginTop: windowHeight*0.2,
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
buttonTitle: {
  color: 'gold',
  fontSize: 16,
  fontWeight: "bold"
},
});

export default SignIn;