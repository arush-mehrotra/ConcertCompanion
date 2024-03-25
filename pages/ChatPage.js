import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure to install react-native-vector-icons

const friendsData = [
  {
    id: '1',
    name: 'Jack',
    status: 'online', 
    message: 'Start the chat with Jack',
    avatar: require('../assets/profile.jpg'), 
  },
  // Add more friends as needed
];

const ChatPage = ({navigation}) => {

  const handleChatPress = () => {
    // Navigate to the MessagePage screen
    navigation.navigate('MessagePage');
   };

  // Render function for each friend
  const renderFriend = ({ item }) => (
    <TouchableOpacity onPress={() => handleChatPress()} style={styles.friendItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.friendDetails}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendMessage}>{item.message}</Text>
      </View>
      <View style={styles.statusIndicator(item.status)} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Friends (1)</Text>
      <FlatList
        data={friendsData}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.navigationBar}>
        <Icon name="home-outline" size={30} color="#4F4F4F" />
        <Icon name="magnify" size={30} color="#4F4F4F" />
        <Icon name="heart" size={30} color="#4A306D" />
        <Icon name="account-circle-outline" size={30} color="#4F4F4F" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'left',
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendDetails: {
    marginLeft: 10,
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendMessage: {
    fontSize: 14,
    color: '#666',
  },
  statusIndicator: (status) => ({
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: status === 'online' ? 'red' : 'gray',
    marginLeft: 10,
  }),
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

export default ChatPage;
