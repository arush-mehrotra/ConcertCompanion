import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MessagePage = ({navigation}) => {
  const [message, setMessage] = useState('');

  const handleBackPress = () => {
    // Navigate to the MessagePage screen
    navigation.navigate('ChatPage');
   };

   const handleOptionsPress = () => {
    // Navigate to the MessagePage screen
    navigation.navigate('OptionsPage');
   };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="arrow-left" size={24} color="#4F4F4F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jack</Text>
        <TouchableOpacity onPress={handleOptionsPress}>
          <Icon name="dots-vertical" size={24} color="#4F4F4F" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Chat with Jack</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.navigationBar}>
        <Icon name="home-outline" size={30} color="#4F4F4F" />
        <Icon name="magnify" size={30} color="#4F4F4F" />
        <Icon name="heart" size={30} color="#4A306D" />
        <Icon name="account-circle-outline" size={30} color="#4F4F4F" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageButton: {
    backgroundColor: '#4A306D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  messageButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 60, // Height of navigation bar + padding
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4A306D',
    padding: 10,
    borderRadius: 20,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default MessagePage;
