import React from "react";
import {
  Modal,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


/* Small reusable components
*
* All of these components are meant to be reused in more than one context. As a rule of thumb, only give components a bottom margin (if flow goes from top to bottom) or a right margin (if flow is left to right). React native does not collapse margins, so they will double up if you put them on all four sides. Consider using the marginStart property if reverse flow is a concern. If you think something needs a top or left margin, consider adding that margin to the adjacent container. */

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },

  textInput: {
    backgroundColor: "#666",
    marginBottom: 30,
  },

  btnText: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "white",
    fontWeight: "500",
    marginBottom: 0,
  },

  ctrlBtnText: {
    padding: 20,
  },

  header: {
    fontSize: 30,
    marginBottom: 30,
    color: 'white',
  },

  appBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    backgroundColor: "#3399ff",
    marginBottom: 20,
    paddingVertical: 10,
    borderRadius: 2,
  },

  plusBtn: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },

  ctrlBtn: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },

  confirmWrapper: {
  // top padding or margin crashes app
    height: "100%",
    backgroundColor: "black",
  },

  confirmContent: {
    marginHorizontal: 25,
    marginVertical: 50,
  },

  confirmBtnWrapper: {
    alignItems: "center",
    marginTop: 30,
  },

});


/* 
* No default exports in this file. Import these components in other files with:
*
*  import {Component1, Component2} from './CustomCore.js';
*/

export const AppText = (props) => {
  return (
    <Text 
      {...props}
      style={[
        styles.text,
        props.style
    ]}>   
      {props.children}
    </Text>
  );
}
    
export const Header = (props) => {
  return (
    <Text 
      {...props}
      style={[
        styles.text,
        styles.header,
        props.style
      ]}>   
      {props.children}
    </Text>
  );
}
 
/** A plain button to be used anywhere
 * @prop children - Text to display on the button
 */
export const AppButton = (props) => {
  return (
    <Pressable 
      onPress={props.onPress}
      style={[
        styles.appBtn,
        props.style
    ]}>
      <Text
        style={[
          styles.text,
          styles.btnText,
        ]}>
        {props.children}
      </Text>
    </Pressable>
  );
}

// Button to add new elements (like fighters)
export const PlusButton = (props) => {
  return (
    <AppButton
      onPress={props.onPress}
      style={[
        styles.plusBtn,
        props.style
      ]}>
      +
    </AppButton>
  );
}

export const AppTextInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.text, styles.textInput]}
    />
  );
}

export const CtrlBtn = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.ctrlBtn,
        props.style
      ]}
      onPress={props.onPress}
    >
      <Text style={[
          styles.text,
          styles.ctrlBtnText,
          props.textStyle,
        ]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

/** A modal with confirm and cancel buttons
 * @prop {string} confirmText - Text to display on the confirm button 
 * @prop children - Content to display above confirm/cancel buttons
 */
export const Confirm = (props) => {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
    >
      <View
        style={styles.confirmWrapper}
      >
        <View
          style={styles.confirmContent}
        >
          {/* Modal Content */}
          {props.children}

          {/* Buttons */}
          <View style={styles.confirmBtnWrapper}>

            <AppButton
              onPress={props.onConfirm}
            >{props.confirmText}</AppButton>
            <AppButton
              onPress={props.onRequestClose}
            >Cancel</AppButton>

          {/*confirmBtnWrapper*/}</View>
        {/*confirmContent*/}</View>
      {/*confirmWrapper*/}</View>
    </Modal>
  ); //return
}
