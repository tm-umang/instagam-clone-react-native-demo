import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {Images} from '../../attech/images/Images';
import { useNavigation } from '@react-navigation/native';
import StatusBarField from '../../common/StatusBarFiled';

const Data = [
  {id: '0', title: 'TYPE'},
  {id: '1', title: 'LIVE'},
  {id: '2', title: 'NORMAL'},
  {id: '3', title: 'BOOMERANG'},
  {id: '4', title: 'SUPERZOOM'},
];

export default function CameraComponent() {
  const navigation = useNavigation(); 
  const renderItem = ({item}) =>{
    return(
      <TouchableOpacity onPress={item.title==="LIVE"?()=>navigation.navigate('Live'):null}>
        <Text style={{color:'white',marginRight:24,fontSize:15,fontWeight:"600"}}>{item.title}</Text>
      </TouchableOpacity>
    );
  } 
  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
      <StatusBarField />
      <ImageBackground
        source={Images.cameraBackgroundImg}
        resizeMode="stretch"
        style={{paddingBottom: 20, backgroundColor: 'black'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 12,
            }}>
            <TouchableOpacity>
              <Image
                source={Images.setting}
                resizeMode="contain"
                style={{height: 33, width: 40}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image
                source={Images.forword}
                resizeMode="contain"
                style={{height: 27, width: 40}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '128%',
            }}>
            <TouchableOpacity>
              <Image
                source={Images.gallary}
                resizeMode="contain"
                style={{height: 33, width: 60}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.flash}
                resizeMode="contain"
                style={{height: 33, width: 60}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.shotButoon}
                resizeMode="contain"
                style={{height: 100, width: 95}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.flipCamera}
                resizeMode="contain"
                style={{height: 33, width: 60}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={Images.fillters}
                resizeMode="contain"
                style={{height: 33, width: 60}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.id}
          contentContainerStyle={{marginVertical:30,marginLeft:24}}
        />
      </View>
    </SafeAreaView>
  );
}
