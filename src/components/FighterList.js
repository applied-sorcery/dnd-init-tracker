import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

import { PlusButton, AppButton, AppText } from "./CustomCore.js";

import Styles from "../../Styles";
import { ThisIsAContext } from "./ThisIsAContext.js";

import Icon from "react-native-vector-icons/FontAwesome";
import IconSearch from "./IconSearch.js";
import { iconPaths } from "../data/Icons.js";

const FighterList = ({ onAddFighterPress }) => {
  const { state, setState } = useContext(ThisIsAContext);
  const [selected, setSelected] = useState(-1);
  const [editingStatus, setEditingStatus] = useState(false);

  const FighterListItem = ({ item }) => {

    const onStatusIconPress = (newStatus) => {
      setState({
        ...state,
        combatObject: {
          ...state.combatObject,
          fighters: state.combatObject.fighters.map((fighter) => {
            return fighter.id === item.id
              ? { ...fighter, status: newStatus }
              : fighter;
          }),
        },
      });
      setEditingStatus(false)
    }

    const onEditStatusPress = (item) => {
      setEditingStatus(!editingStatus);
      // setState({
      //   ...state,
      //   combatObject: {
      //     ...state.combatObject,
      //     fighters: state.combatObject.fighters.map((fighter) => {
      //       return fighter.id === item.id
      //         ? { ...fighter, status: item.split(".")[0] }
      //         : fighter;
      //     }),
      //   },
      // });
    };

    const CollapsedFighter = ({
      Styles,
      state,
      setState,
      onEditStatusPress,
      item,
    }) => (
      <View
        style={
          state.combatObject.fighters.indexOf(item) ===
          state.combatObject.whoseTurn
            ? [Styles.fighterListItem, Styles.highlightFighter]
            : Styles.fighterListItem
        }
      >
        <AppText style={{ marginRight: 18 }}>
          [ init: {item.initScore} ]
        </AppText>
        <AppText>{item.name}</AppText>
        <Image
          style={{ marginLeft: 10, height: 25, width: 25 }}
          source={iconPaths[item.status]}
        />
      </View>
    ); //End CollapsedFighter

    const ExpandedFighter = ({
      Styles,
      state,
      setState,
      onEditStatusPress,
      item,
    }) => (
      <View style={{ borderColor: "red", borderWidth: 0 }}>
        <View
          style={
            state.combatObject.fighters.indexOf(item) ===
            state.combatObject.whoseTurn
              ? [Styles.fighterListItem, Styles.highlightFighter]
              : Styles.fighterListItem
          }
        >
          <AppText style={{ marginRight: 18 }}>
            [ init: {item.initScore} ]
          </AppText>
          <AppText>{item.name}</AppText>
          <Image
            style={{ marginLeft: 10, height: 25, width: 25 }}
            //replace this with dynamically chosen image
            source={iconPaths[item.status]}
          />
        </View>
        <View style={Styles.editStatusBox}>
        <View
          style={Styles.statusRow}
        >
          <AppText>{"Status: " + item.status}</AppText>
          <Pressable style={{ fontSize: 10 }} onPress={onEditStatusPress}>
            <AppText style={
              editingStatus 
              ? [Styles.statusIcon, Styles.pressedStatusIcon]
              : Styles.statusIcon}>
              <Icon name="edit" size={30} />
            </AppText>
          </Pressable>
        </View >
         {/*end status row  */}

         {  editingStatus && 
          (<View style={Styles.statusSearch}>
            <IconSearch onStatusIconPress={onStatusIconPress}/>

          </View>)
         }
         </View>
      </View>
    ); //End ExpandedFighter

    return (
      <TouchableOpacity
        onPress={() => {
          selected === item.id ? setSelected(-1) : setSelected(item.id);
        }}
      >
        {selected === item.id ? (
          <ExpandedFighter {...{ Styles, state, setState, onEditStatusPress, item }} />
        ) : (
          <CollapsedFighter {...{ Styles, state, setState, onEditStatusPress, item }}
          />
        )}
      </TouchableOpacity>
    );
  }; //FighterListItem

  return (
    <>
      <View
        style={[
          Styles.fighterListWrapper,
          {
            height: 200,
          },
        ]}
      >
        <FlatList
          contentContainerStyle={{}}
          data={state.combatObject.fighters}
          renderItem={FighterListItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View
              style={{
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <AppText>{"Press (+) to add a fighter"}</AppText>
            </View>
          )}
          keyboardShouldPersistTaps="always"
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <PlusButton onPress={onAddFighterPress}></PlusButton>
      </View>
    </>
  );
}; // FighterList

export default FighterList;
