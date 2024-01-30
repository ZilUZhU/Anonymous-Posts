import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const onSignIn = () => {
        navigation.navigate('signin')
    }
    const onRegister = () => {
        navigation.navigate('Login')
    }
  return (
    <View style={styles.container}>
      <Button 
        title="Sign In" 
        onPress={() => navigation.navigate('signin')} 
      />
      <Button 
        title="Register" 
        onPress={() => navigation.navigate('register')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
