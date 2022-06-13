import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Images} from '../../attech//images/Images';

const Data = [
  {
    id: '0',
    img: Images.highlight1,
    title: 'New',
  },
  {
    id: '1',
    img: Images.highlight2,
    title: 'Friends',
  },
  {
    id: '2',
    img: Images.highlight3,
    title: 'Sport',
  },
  {
    id: '3',
    img: Images.highlight4,
    title: 'Design',
  },
];

export default function ProfileComponent() {
  const renderItem = ({item}) => {
    return (
      <View style={{marginHorizontal: 5}}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={{height: 75, width: 75}}
        />
        <Text style={{textAlign: 'center', paddingVertical: 4}}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal:10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>jacob_w</Text>
            <Image
              source={Images.list}
              resizeMode="contain"
              style={{height: 10, width: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 60,
            }}>
            <TouchableOpacity>
              <Image
                source={Images.add}
                resizeMode="contain"
                style={{height: 25, tintColor: 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.drawer}
                resizeMode="contain"
                style={{height: 25, tintColor: 'black'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={styles.profilephoto}>
              <Image
                source={Images.user1}
                resizeMode={'contain'}
                style={{height: 112, width: 104, alignSelf: 'center'}}
              />
            </View>
            <View style={styles.profilelayout}>
              <View>
                <View>
                  <Text style={styles.number}>54</Text>
                </View>
                <View>
                  <Text style={styles.details}>Posts</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.number}>835</Text>
                </View>
                <View>
                  <Text style={styles.details}>Followers</Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.number}>163</Text>
                </View>
                <View>
                  <Text style={styles.details}>Following</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 14}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Jacob West</Text>
            <Text style={{fontSize: 16, width: 250, lineHeight: 22}}>
              Digital goodies designer
              <Text style={{color: '#0858A9'}}>@pixsellz </Text>Everything is
              designed.
            </Text>
          </View>
          <View style={styles.editButton}>
            <TouchableOpacity>
              <Text style={{textAlign: 'center', fontWeight: '500'}}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal>
            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={{flexDirection: 'row'}}
            />
          </ScrollView>
          <View style={styles.line}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
