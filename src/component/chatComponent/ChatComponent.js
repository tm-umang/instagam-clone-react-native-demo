import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from '../chatComponent/style';
import {Images} from '../../attech/images/Images';
import {useNavigation} from '@react-navigation/native';

const Data = [
  {
    id: '0',
    img: Images.postImg,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '1',
    img: Images.user1,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '2',
    img: Images.user2,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '3',
    img: Images.user3,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '4',
    img: Images.user4,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '5',
    img: Images.user5,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '6',
    img: Images.user1,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '7',
    img: Images.user3,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '8',
    img: Images.user2,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '9',
    img: Images.user4,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
  {
    id: '10',
    img: Images.user5,
    userName: 'joshua_l',
    msg: 'Have a nice day, bro!',
    time: '· now',
  },
];

export default function ChatComponent() {
  const renderItem = ({item}) => {
    return (
      <TouchableHighlight underlayColor="white">
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 6,
          }}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{width: 57, height: 57}}
          />
          <View
            style={{
              width: 270,
              paddingHorizontal: 11,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text>{item.userName}</Text>
              <Text>{item.msg}</Text>
            </View>
            <View style={{height: 35, justifyContent: 'flex-end'}}>
              <Text style={{color: 'grey', paddingRight: 17}}>{item.time}</Text>
            </View>
          </View>

          <View>
            <Image
              source={Images.cameraIcon}
              resizeMode="contain"
              style={{height: 25, tintColor: '#989696', width: 45}}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.back}
            resizeMode="contain"
            style={{width: 13, tintColor: 'black'}}
          />
        </TouchableOpacity>
        <Text style={styles.editText}>jacob_w</Text>
        <TouchableOpacity>
          <Image
            source={Images.plusIcon}
            resizeMode="contain"
            style={{width: 26, tintColor: 'black'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarView}>
        <Image
          source={Images.search}
          resizeMode={'contain'}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#909090"
          style={styles.searchbar}
        />
      </View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
