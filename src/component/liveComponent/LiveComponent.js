import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {Images} from '../../attech/images/Images';
import {styles} from './style';
import StatusBarFiled from '../../common/StatusBarFiled';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    id: '0',
    text: 'Hello',
  },
  {
    id: '1',
    text: '😅',
  },

  {
    id: '2',
    text: '❤️‍🔥',
  },
  {
    id: '3',
    text: '👋',
  },
  {
    id: '4',
    text: '🥰',
  },
];

export default function LiveComponent() {
  const [text, onChangeText] = React.useState('Useless Text');
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.reactionBox}>
        <Text style={styles.reaction}>{item.text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <StatusBarFiled />
      <View style={{height: '94%'}}>
        <ImageBackground source={Images.liveBackground} style={styles.backimg}>
          <View style={styles.flexheader}>
            <TouchableOpacity style={styles.flex}>
              <Image source={Images.user5} style={styles.userimg} />
              <Text style={styles.text}>maxjacobson</Text>
            </TouchableOpacity>
            <View style={styles.flex}>
              <Image source={Images.live} />
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={Images.closeIcon} style={styles.closeicon} />
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
          />
        </ImageBackground>
      </View>

      <View style={styles.comment}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Comment"
          placeholderTextColor={'grey'}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '31%',
          }}>
          <Image
            source={Images.question}
            style={{height: 30, width: 30}}
            resizeMode="contain"
          />
          <Image source={Images.massage} style={{tintColor: 'white'}} />
          <Image source={Images.like} style={{tintColor: 'white'}} />
        </View>
      </View>
    </SafeAreaView>
  );
}
