import {View, Text, Image, StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
import {Images} from '../attech/images/Images';

const postData = [
  {
    id: '0',
    userImg: Images.postImg,
    userName: 'joshua_l',
    location: 'Tokyo,Japan',
    postImage: Images.Post,
    likeImg: Images.user2,
    likes: 'Liked by craig_love and 4,486 others',
    caption:
      'joshua_l The game in Japan was amazing and I want to share some photos',
    time: '13 min ago',
  },
  {
    id: '1',
    userImg: Images.user5,
    userName: 'craig_love',
    location: 'Paris',
    postImage: Images.post2,
    likeImg: Images.user3,
    likes: 'Liked by zackjohn and 1,080 others',
    caption:
      'You can not dull my sparkle ✨',
    time: ' 46 min ago',
  },
  {
    id: '2',
    userImg: Images.user2,
    userName: 'craig_love',
    location: 'Paris',
    postImage: Images.post3,
    likeImg: Images.user3,
    likes: 'Liked by zackjohn and 400 others',
    caption:
      'You can not dull my sparkle ✨',
    time: '2 hours ago',
  },
];

export default function Post() {
  const renderItem = ({item}) =>{
    return(
      <>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <Image
              source={item.userImg}
              resizeMode={'contain'}
              style={styles.image}
            />
            <View style={{paddingLeft: 8}}>
              <Text style={styles.userName}>{item.userName}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={Images.moreIcon}
                resizeMode={'contain'}
                style={{width: 30, height: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Image
          source={item.postImage}
          resizeMode={'contain'}
          style={{width: '100%', height: 390}}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}>
        <View style={styles.flex}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 100,
            }}>
            <TouchableOpacity>
              <Image source={Images.like} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.comment} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Images.massage} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={Images.save}
              resizeMode={'contain'}
              style={{width: 18}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={item.likeImg}
            resizeMode={'contain'}
            style={{width: 25, height: 23, marginVertical: 8}}
          />
          <Text style={{paddingLeft: 7, fontSize: 15}}>
           {item.likes}
          </Text>
        </View>
        <Text style={{fontSize: 15, width: 370}}>
          {item.caption}
        </Text>
        <Text style={{fontSize: 13, color: 'grey',marginTop:2}}>{item.time}</Text>
      </View>
    </>
    );
  }
  return (
    <FlatList
      data={postData}
      renderItem={renderItem}
          keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {width: 47, height: 45},
  userName: {fontSize: 16, fontWeight: '500'},
  location: {fontSize: 13, fontWeight: '400'},
});
