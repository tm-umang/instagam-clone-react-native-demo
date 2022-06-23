import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  useWindowDimensions,
  Dimensions,
  ActivityIndicator,
  Image,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {styles} from '../component/searchComponent/styles';
import {Images} from '../attech/images/Images';

import StaggeredList from '@mindinventory/react-native-stagger-view';

const FirstRoute = () => {
  const [imageURL, setImageURL] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const SCREEN_WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=')
        .then(res => res.json())
        .then(resJson => {
          setImageURL([...resJson]);
          setIsLoading(false);
        })
        .catch(e => {
          console.log(e);
          setIsLoading(false);
        });
    };
    fetchImages();
  }, []);

  const renderChildren = item => {
    return (
      <View style={getChildrenStyle()} key={item.id}>
        <View style={styles.avatarImage}>
          <Image
            onError={() => {}}
            style={styles.img}
            source={{
              uri: item.url,
            }}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  };

  const getChildrenStyle = () => {
    return {
      width: (SCREEN_WIDTH - 30) / 3,
      height: Number(Math.random() * 4 + 9) * 9,
      margin: 1,
    };
  };
  return (
    <StaggeredList
      data={imageURL}
      animationType={'FADE_IN_FAST'}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => renderChildren(item)}
      isLoading={isLoading}
      numColumns={3}
      LoadingView={
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator color={'black'} size={'large'} />
        </View>
      }
    />
  );
};

const SecondRoute = () => (
  <View>
    <Text>tag</Text>
    <Text>tag</Text>
    <Text>tag</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function ProfileTab() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Post'},
    {key: 'second', title: 'Tag'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'black', height: 1}}
      style={{backgroundColor: 'white'}}
      labelStyle={{color: '#3875EA'}}
      renderLabel={({routes, focused}) => (
        <View style={styles.tabBarTitleContainer}>
          <Image
            source={Images.feed}
            resizeMode="contain"
            style={{width: 19, height: 19}}
          />
        </View>
      )}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
