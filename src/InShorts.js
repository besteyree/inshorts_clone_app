import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const hardcodedNews = [
  {
    news_id: 1,
    title: 'Lorem Ipsum 1',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    `,
    // content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../assets/1.jpeg'),
  },
  {
    news_id: 2,
    title: 'Lorem Ipsum 2',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: require('../assets/2.jpeg'),
  },
  {
    news_id: 3,
    title: 'Lorem Ipsum 3',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: require('../assets/3.jpeg'),
  },
  {
    news_id: 4,
    title: 'Lorem Ipsum 4',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: require('../assets/1.jpeg'),
  },
  {
    news_id: 5,
    title: 'Lorem Ipsum 5',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: require('../assets/2.jpeg'),
  },
];

const InShorts = () => {
  const renderNewsItem = (item, index) => (
    <View key={item.news_id} style={styles.newsItemContainer}>
      <View style={styles.newsItem}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <SwiperFlatList
      data={hardcodedNews}
      renderItem={({item, index}) => renderNewsItem(item, index)}
      keyExtractor={item => item.news_id.toString()}
      index={0} // Start with the first news item
      vertical
      paginationStyle={{marginBottom: 20}}
    />
  );
};

const styles = StyleSheet.create({
  newsItemContainer: {
    flex: 1,
    position: 'relative',
  },
  newsItem: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default InShorts;
