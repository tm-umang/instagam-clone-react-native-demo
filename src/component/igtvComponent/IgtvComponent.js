import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Images} from '../../attech/images/Images';
import {styles} from '../igtvComponent/styles';
import {useNavigation} from '@react-navigation/native';
import StatusBarField from '../../common/StatusBarFiled';

const Data = [
  {
    id: '0',
    img: Images.igtv2,
    time: '9:14',
    text: 'Interviews with leading designers of large compa…',
    userName: 'amanda_design',
    views: '37.2k views',
  },
  {
    id: '1',
    img: Images.igtv3,
    time: '5:23',
    text: 'Regular and studio shooting comparison',
    userName: 'photo.master',
    views: '52.4k views',
  },
  {
    id: '2',
    img: Images.igtv4,
    time: '9:14',
    text: 'Interviews with leading designers of large compa…',
    userName: 'amanda_design',
    views: '37.2k views',
  },
  {
    id: '3',
    img: Images.igtv5,
    time: '9:14',
    text: 'Interviews with leading designers of large compa…',
    userName: 'amanda_design',
    views: '37.2k views',
  },
];

export default function IgtvComponent() {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View>
        <StatusBarField />
        <ImageBackground
          source={item.img}
          resizeMode="cover"
          style={{height: 330, width: 193,margin:1}}>
          <Text style={styles.time}>{item.time}</Text>
         <View style={styles.contant}>
         <Text style={styles.txt}>{item.text}</Text>
          <Text style={styles.txt}>{item.userName}</Text>
          <Text style={styles.txt}>{item.views}</Text>
         </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View>
      <Image
        source={Images.igtv1}
        resizeMode="cover"
        style={{width: '100%', height: 360}}
      />
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.back}
            resizeMode="contain"
            style={{width: 13}}
          />
        </TouchableOpacity>
        <Text style={styles.editText}>IGTV</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={Images.search} style={{tintColor: 'white'}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.plusIcon}
              resizeMode="contain"
              style={{width: 26}}
            />
          </TouchableOpacity>
        </View>
      </View>

        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        />

    </View>
  );
}
