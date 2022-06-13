import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  SectionList,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../attech/images/Images';
import FollowBtn from '../../common/FollowBtn';

const DATA = [
  {
    title: 'New',
    data: [
      {
        id: '0',
        img: Images.user2,
        text: 'mis_potter started following you.',
        time: '1h',
        post: Images.post3, 
        btn :'follow'
      },
      {
        id: '1',
        img: Images.user3,
        text: 'j_hone liked your photo.',
        time: '1h',
        post: Images.post2,
      },
    ],
  },
  {
    title: 'Today',
    data: [
      {
        id: '0',
        img: Images.user1,
        text: 'karennne liked your photo.',
        time: '1h',
        post: Images.post3,
      },
      {
        id: '1',
        img: Images.user3,
        text: 'pitter started following you.',
        time: '2h',
        post: Images.post2,
      },
      {
        id: '2',
        img: Images.user3,
        text: 'karennne liked your photo.',
        time: '2h',
        post: Images.post2,
      },
      {
        id: '3',
        img: Images.user4,
        text: 'karennne liked your photo.',
        time: '2h',
        post: Images.post3,
      },
      {
        id: '3',
        img: Images.user4,
        text: 'xyz started following you',
        time: '2h',
        post: Images.post2,
        btn :'follow'
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: '0',
        img: Images.user5,
        text: 'martini_rond liked your photo.',
        time: '1d',
        post: Images.post3,
      },
      {
        id: '1',
        img: Images.user5,
        text: 'martini_rond liked your photo.',
        time: '1d',
        post: Images.post2,
      },
      {
        id: '2',
        img: Images.user5,
        text: 'martini_rond liked your photo.',
        time: '1d',
        post: Images.post2,
      },
      {
        id: '3',
        img: Images.user5,
        text: 'martini_rond liked your photo.',
        time: '1d',
        post: Images.post3,
      },
      {
        id: '3',
        img: Images.user5,
        text: 'jhone started following you',
        time: '1d',
        post: Images.post3,
        btn :'follow'
      },
    ],
  },
];

const Item = ({title}) => (
  <View
    style={{
      marginTop: 13,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    <View style={{flexDirection: 'row',alignItems:'center'}}>
      <Image
        source={title.img}
        resizeMode="contain"
        style={{height: 40, width: 40}}
      />
      <View style={{width:240,flexDirection:'row'}}>
      <Text style={{fontSize: 15, paddingLeft: 8}}>{title.text} {title.time}</Text>
      {/* <Text style={{fontSize: 15, paddingLeft: 8, color: 'grey'}}>
        {title.time}
      </Text> */}
      </View>
    </View>
    <View style={{justifyContent:'center'}}>
      {title.btn == 'follow' ? (
        <FollowBtn />
      ) : (
        <Image
          source={title.post}
          resizeMode="contain"
          style={{height: 43, width: 43}}
        />
      )}
    </View>
  </View>
);

export default function LikeComponent() {
  return (
    <View style={styles.container}>

    <SafeAreaView >
      <Text style={styles.titl}>Activity</Text>
      <ScrollView>
        <SectionList
          contentContainerStyle={{paddingHorizontal: 10}}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={{fontSize: 16, fontWeight: '600', marginTop: 20}}>
              {title}
            </Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
    </View>
  );
}
