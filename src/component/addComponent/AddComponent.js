import { View, Text } from 'react-native'
import React from 'react';
import { styles } from './styles';
import { CommonStyles } from '../../common/CommonStyles';

export default function AddComponent() {
  return (
    <View style={CommonStyles.container}>
    <View style={styles.container}>
      <Text>AddScreen</Text>
      </View>
    </View>
  )
}