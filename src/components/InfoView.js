import {
  View,
  Text,
} from 'react-native';

import MonsterStatsView from './MonsterStatsView.js';

import Styles from '../../Style.js';
const InfoView = ({route, navigation})=>{
  return(
    <View>
        <MonsterStatsView route={route}/>
    </View>
  );
};

export default InfoView;