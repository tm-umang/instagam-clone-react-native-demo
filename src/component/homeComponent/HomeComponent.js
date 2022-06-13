import {
    SafeAreaView,
    Text,
    StatusBar,
    FlatList,
    View,
    Image,
    StyleSheet,
    ScrollView
  } from 'react-native';
  import React from 'react';
  import Header from '../../common/Header';
  import {Images} from '../../attech/images/Images';
  import LinearGradient from 'react-native-linear-gradient';
  import Post from '../../common/Post';
  import { styles } from './styles';
  
  const StoryData = [
    {
      id: '0',
      image: Images.user1,
      title: 'Your Story',
    },
    {
      id: '1',
      image: Images.user2,
      title: 'karennne',
    },
    {
      id: '2',
      image: Images.user3,
      title: 'zackjohn',
    },
    {
      id: '3',
      image: Images.user4,
      title: 'kieron_d',
    },
    {
      id: '4',
      image: Images.user5,
      title: 'craig_love',
    },
  ];
  
  export default function HomeComponent() {
    const renderItem = ({item}) => {
      return (
        <View style={styles.storyBox}>
          <LinearGradient
            colors={['#FBAA47', '#D91A46', '#A60F93']}
            style={styles.gradiant}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
          </LinearGradient>
          <Text style={{marginTop: 5}}>{item.title}</Text>
        </View>
      );
    };
  
    return (
      <SafeAreaView>
        <Header />
        <View style={{borderBottomWidth: 0.2, borderBottomColor: 'grey'}}>
          <FlatList
            data={StoryData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <ScrollView style={{height:"76%"}}>
          <Post />
        </ScrollView>
      </SafeAreaView>
    );
  }
  