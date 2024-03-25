import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CombinedProfileScreen = ({navigation}) => {
    
  const handleCheckPress = () => {
    // Navigate to the ChatPage screen
    navigation.navigate('ChatPage');
  };

  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.profileScreen}>
            <View style={styles.fst_container}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>Jack</Text>
                <Text style={styles.age}>20</Text>
            </View>
            <Image
                source={require('../assets/profile.jpg')} // Replace with your image path
                style={styles.profileImage}
            />
            <TouchableOpacity style={styles.downArrowContainer}>
                <Icon name="chevron-down" size={30} color="#4F4F4F" />
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileDetailScreen}>
        <ScrollView style={styles.container}>
        <View style={styles.likesContainer}>
            <Text style={styles.likesText}>3 Likes Left Today</Text>
        </View>
        
        <View style={styles.genreContainer}>
            <Text style={styles.sectionTitle}>Top Genres</Text>
            <View style={styles.genreList}>
            <Text style={styles.genre}>R&B</Text>
            <Text style={styles.genre}>Hip-Hop</Text>
            <Text style={styles.genre}>Pop</Text>
            </View>
        </View>
        
        <View style={styles.artistContainer}>
            <Text style={styles.sectionTitle}>Top Artists</Text>
            {/* This would be a list, possibly rendered from an array of artists */}
            <View style={styles.artistList}>
            <Text style={styles.artist}>The Weeknd</Text>
            <Text style={styles.artist}>Kendrick Lamar</Text>
            <Text style={styles.artist}>Taylor Swift</Text>
            </View>
        </View>

        <View style={styles.streamingContainer}>
            <Text style={styles.sectionTitle}>Streaming Platforms</Text>
            <View style={styles.streamingList}>
            <Icon name="spotify" size={24} color="#1DB954" />
            <Text style={styles.streamingUsername}>jack03</Text>
            </View>
        </View>

        <View style={styles.actions}>
            <TouchableOpacity style={[styles.actionButton, styles.like]} onPress={handleCheckPress}>
                <Icon name="check" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.dislike]}>
                <Icon name="close" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
        </ScrollView>

        <View style={styles.navigation}>
            <Icon name="home-outline" size={30} color="#4A306D" />
            <Icon name="magnify" size={30} color="#4F4F4F" />
            <Icon name="heart" size={30} color="#FF0000" />
            <Icon name="account-circle-outline" size={30} color="#4F4F4F" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  fst_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoContainer: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  name: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 28,
    color: '#4F4F4F',
  },
  profileImage: {
    width: 350, 
    height: 575,
    borderRadius: 10, 
    marginTop: 15
  },
  downArrowContainer: {
    marginTop: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  likesContainer: {
    backgroundColor: '#4A306D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginBottom: 20,
  },
  likesText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  genreContainer: {
    marginBottom: 20,
  },
  genreList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-start'
  },
  genre: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
  },
  artistContainer: {
    marginBottom: 20,
  },
  artistList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'flex-start'
  },
  artist: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  streamingContainer: {
    marginBottom: 20,
  },
  streamingList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streamingUsername: {
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    backgroundColor: '#4CAF50',
  },
  dislike: {
    backgroundColor: '#F44336',
  },
});

export default CombinedProfileScreen;
