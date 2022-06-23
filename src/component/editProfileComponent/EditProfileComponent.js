import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from '../editProfileComponent/style';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../attech/images/Images';

export default function EditProfileComponent() {
  const navigation = useNavigation();
  const [name, onChangeName] = React.useState('Jacob West');
  const [username, onChangeUsername] = React.useState('jacob_w');
  const [website, onChangeWebsite] = React.useState('');
  const [bio, onChangeBio] = React.useState(
    'Digital goodies designer @pixsellz Everything.',
  );
  const [email, onChangeEmail] = React.useState('jacob.west@gmail.com');
  const [phone, onChangePhone] = React.useState('202 555 0147');
  const [gender, onChangeGender] = React.useState('Male');

  return (
    <SafeAreaView>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancle}>Cancle</Text>
        </TouchableOpacity>
        <Text style={styles.editText}>Edit Profile</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 19,
          borderBottomColor: '#B0B0B7',
          borderBottomWidth: 0.2,
        }}>
        <Image
          source={Images.user1}
          resizeMode="contain"
          style={styles.avtar}
        />
        <TouchableOpacity>
          <Text style={styles.changePhoto}>Change Profile Photo</Text>
        </TouchableOpacity>
      </View>
      
      <View
        style={{
          borderBottomColor: '#B0B0B7',
          borderBottomWidth: 0.2,
          paddingBottom: 12,
        }}>
        <View style={styles.details}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={username}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Website</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeWebsite}
            value={website}
            placeholder="Website"
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Bio</Text>
          <TextInput
            style={[styles.input, {height: 60}]}
            onChangeText={onChangeBio}
            value={bio}
            multiline
          />
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.switch}>Switch to Professional Account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.privateInformation}>Private Information</Text>
      </View>
      <View style={{marginVertical:20}}>
        <View style={styles.details}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Gender</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeGender}
            value={gender}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
