import React from 'react';
import { View, FlatList, Image, TextInput } from 'react-native';
import Styles from '../../Styles.js'

const iconFileNames = [
  'Bleeding Out.png',
  'Charmed.png',
  'Exhausted.png',
  'Frightened.png',
  'Incapacitated.png',
  'Paralyzed.png',
  'Poisoned.png',
  'Restrained.png',
  'Blinded.png',
  'Deafened.png',
  'Concentrating.png',
  'Grappled.png',
  'Invisible.png',
  'Petrified.png',
  'Prone.png',
  'Stunned.png'
];

const IconGrid = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const filteredIcons = React.useMemo(() => {
    return iconFileNames.filter((fileName) => {
      return fileName.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue]);

  const renderItem = ({ item }) => (
    <View style={{ margin: 5 }}>
      <Image source={require(`../../assets/icons/${item}`)} style={{ width: 50, height: 50 }} />
    </View>
  );

  return (
    <View>
      <TextInput value={searchValue} onChangeText={setSearchValue} style={Styles.statusSearch}/>
      <FlatList
        data={filteredIcons}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        numColumns={5}
      />
    </View>
  );
};

export default IconGrid;