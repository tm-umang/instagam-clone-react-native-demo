import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddScreen from '../screens/AddScreen';
import LikeScreen from '../screens/LikeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Images} from '../attech/images/Images'


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        tabBarStyle: {
          paddingTop: 6,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.fillHome : Images.home}
              resizeMode={'contain'}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.filledSearch : Images.search}
              resizeMode={'contain'}
            />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.FilledAdd : Images.add}
              resizeMode={'contain'}
            />
          ),
        }}
        name="Add"
        component={AddScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.filedLike : Images.like}
              resizeMode={'contain'}
            />
          ),
        }}
        name="Like"
        component={LikeScreen}
      />
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.fillProfile : Images.profile}
              resizeMode={'contain'}
              style={{width:30,height:30}}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
