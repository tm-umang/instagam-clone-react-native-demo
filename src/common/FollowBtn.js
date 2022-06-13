import {View, Text, Button,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

export default function FollowBtn({focused}) {
    const [text, setText] = useState("Follow");
    const onPressHandler = event => setText("Message");

  return (
    <View style={{backgroundColor:text =='Follow' ? '#3797EF' : '#fff',borderRadius:6,borderWidth:text =='Follow' ? 0 :2,borderColor:'#E3E3E3'}}>
     <TouchableOpacity  style={{height:28,width:75,justifyContent:'center',alignItems:'center',}} onPress={onPressHandler} ><Text style={{color: text == 'Follow' ? 'white' : 'black'}}>{text}</Text></TouchableOpacity>
    </View>
  );
}
