import React, { useState } from "react";

import {
  Modal,
  View,
} from "react-native";

import {
  AppText,
  Header,
  AppButton,
  AppTextInput,
  Confirm,
} from './CustomCore.js';

const AddFighterView = ({
  onAddFighterSubmit,
  newFighterId,
  addFighterModalVisible,
  setAddFighterModalVisible,
}) => {

  const emptyFighter = {
    id: 0,
    name: "NA",
    initScore: "0",
  }

  const [newFighter, setNewFighter] = useState(emptyFighter);

  const closeAddFighter = () => {
    setAddFighterModalVisible(false);
    setNewFighter(emptyFighter);
  }

  return (
    <Confirm
      visible={addFighterModalVisible}
      confirmText="Add"
      onRequestClose={() => {
        closeAddFighter();
      }}
      onConfirm={() => {
        onAddFighterSubmit({
          ...newFighter,
          id: newFighterId(),
        });
        closeAddFighter();
      }}
    >
      
      <Header>Create a new fighter</Header>
      <AppText>Fighter Name:</AppText>
      <AppTextInput
        placeholder="Name of player or enemy"
        onChangeText={(name) => {
          setNewFighter({ ...newFighter, name: name });
        }}
      />
      <AppText>Initiative Score:</AppText>
      <AppTextInput
        keyboardType="numeric"
        placeholder="0"
        onChangeText={(initScore) => {
          setNewFighter({ ...newFighter, initScore: initScore });
        }}
      />

    </Confirm>
  );

} //AddFighterView

export default AddFighterView;
