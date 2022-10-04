import {
  View,
  Text,
} from 'react-native';

import Styles from '../../Style.js';
const InfoView = ({item})=>{
  return(
    <View>
        <Text>{item.name}</Text>
        <Text>{item.init}</Text>
        <Text>{item.level}</Text>
    </View>
  );
};

export default InfoView;