import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpPress = () => {
    // Navigate to the CreateAccount screen
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <Icon name="music" size={150} color="black" />
      <Text style={styles.title}>concert companion</Text>
      
      <Text style={styles.loginTitle}>Login to your Account</Text>
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      
      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      
      {/* Sign Up */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account? </Text>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 16,
    // Customize your logo's style
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  loginTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  input: {
    width: width - 40, // Sets a fixed width based on screen width minus some margin
    height: 50, // Increase height for a larger touch area
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4A306D',
    padding: 15,
    borderRadius: 5,
    width: width - 40, // Match width with input fields
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  forgotPassword: {
    marginBottom: 24, 
  },
  forgotPasswordText: {
    color: '#4A306D',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  signUpText: {
    fontSize: 16,
  },
  signUpButton: {
    color: '#4A306D',
    fontWeight: '600',
  },
});

export default LoginScreen;
