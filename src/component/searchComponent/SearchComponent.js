import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Images from '../../attech/images/search.png';

import StaggeredList from '@mindinventory/react-native-stagger-view';


export default function SearchComponent() {
  const [imageURL, setImageURL] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const SCREEN_WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
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
      width: (SCREEN_WIDTH - 18) / 3,
      height: Number(Math.random() * 4 + 12) * 10,
      margin: 4,
    };
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 10,
          position: 'relative',
        }}>
        <Image
          source={Images}
          resizeMode={'contain'}
          style={{
            width: 20,
            opacity: 0.7,
            position: 'absolute',
            zIndex: 1,
            left: 25,
          }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#909090"
          style={{
            width: '94%',
            backgroundColor: '#EBEBEB',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            padding: 10,
            paddingLeft: 40,
          }}
        />
      </View>
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
      
    </SafeAreaView>
  );
}
