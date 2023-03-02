//ChatGPT wrote this entire file, getting the paths wrong but worked after minimal tweaking.

import React from 'react';
import { View, FlatList, Image, TextInput, Pressable } from 'react-native';
import {iconFileNames, iconPaths} from "../data/Icons.js"
import Styles from '../../Styles.js';

const IconSearch = ({onStatusIconPress}) => {
  const [searchValue, setSearchValue] = React.useState('');



  const filteredIcons = React.useMemo(() => {
    return iconFileNames.filter((fileName) => {
      return fileName.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue]);

  const renderItem = ({ item }) => (
    <View style={{ margin: 5 }}>
      <Pressable onPress={()=>onStatusIconPress(item.split('.')[0])}>
        <Image source={iconPaths[item.split('.')[0]]} style={{ width: 50, height: 50 }} />
      </Pressable>
    </View>
  );

  return (
    <View>
      <TextInput value={searchValue} onChangeText={setSearchValue} 
      placeholder={"search..."} style={Styles.searchInput}/>
      <FlatList
        data={filteredIcons}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={4}
      />
    </View>
  );
};

export default IconSearch;
