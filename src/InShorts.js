import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

// run api call to get news
const getNews = async () => {
  // run api call to get news
  try {
    const response = await fetch(
      'https://gbzyvra19a.execute-api.ap-south-1.amazonaws.com/default/getCurrentNews',
    );
    const json = await response.json();
    // console.log(json);
    // loop through JSON
    // in each item, check if image_link starts with //img
    // if it does, replace it with https://img
    // return modified JSON
    json.forEach(item => {
      console.log(item.image_link)
      if (item.image_link.startsWith('//img')) {
        item.image_link = item.image_link.replace('//img', 'https://img');
      }
    });
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const InShorts = () => {
  const [hardcodedNews, setHardcodedNews] = useState([]);

  useEffect(() => {
    getNews().then(news => setHardcodedNews(news));
  }, []);

  const renderNewsItem = (item, index) => (
    <View key={item.news_id} style={styles.newsItemContainer}>
      <View style={styles.newsItem}>
        <Image source={{uri: item.image_link}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
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
    color: '#000000',
    borderRadius: 8,
    padding: 16,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  image: {
    width: '100%',
    //height: '',
    aspectRatio: 16/9,
    borderRadius: 8,
    marginBottom: 8,
    // add margin to top
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    // add a bottom margin to the description
    marginBottom: 8,
    // add rounded border
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    // add padding inside the border
    padding: 8,
  },
});

export default InShorts;
