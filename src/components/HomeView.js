import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Styles from '../../Style';

const HomeView = ({navigation}) => (
  <View style={Styles.container}>
    <Text style={Styles.defaultText}>
      Add combatatants to your list by searching the D&D API or by importing
      your own.
    </Text>
  </View>
);

export default HomeView;
