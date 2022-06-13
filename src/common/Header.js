import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '../attech/images/Images';

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#FAFAFA',
    paddingVertical: 12,
    borderBottomWidth: 0.2,
    borderBottomColor:'grey',
    alignItems: 'center',
  },
  flex:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 55,
  },
})

export default function Header() {
  return (
    <View
      style={styles.header}>
      <View>
        <TouchableOpacity>
          <Image source={Images.cameraIcon} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <View style={{paddingLeft: 30}}>
        <TouchableOpacity>
          <Image
            source={Images.instagramLogo}
            resizeMode={'contain'}
            style={{width: 220}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={styles.flex}>
        <TouchableOpacity>
          <Image source={Images.igTv} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.massage} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
