import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OptionsPage = ({ navigation }) => {
  // Placeholder functions for button actions
  const handleUnmatch = () => {
    // Unmatch logic here
  };

  const handleReport = () => {
    // Report logic here
  };

  const handleGetHelp = () => {
    // Get further help logic here
  };

  const handleBackPress = () => {
    // Navigate to the MessagePage screen
    navigation.navigate('MessagePage');
   };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="arrow-left" size={24} color="#4F4F4F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jack</Text>
        <Icon name="dots-vertical" size={24} color="#4F4F4F" />
      </View>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={handleUnmatch} style={styles.button}>
          <Text style={styles.buttonText}>Unmatch with Jack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReport} style={styles.button}>
          <Text style={styles.buttonText}>Report Jack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetHelp} style={styles.button}>
          <Text style={styles.buttonText}>Get Further Help</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationBar}>
        <Icon name="home-outline" size={30} color="#4F4F4F" />
        <Icon name="magnify" size={30} color="#4F4F4F" />
        <Icon name="heart" size={30} color="#4A306D" />
        <Icon name="account-circle-outline" size={30} color="#4F4F4F" />
      </View>

    </SafeAreaView>
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
  optionsContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4A306D',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
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

export default OptionsPage;