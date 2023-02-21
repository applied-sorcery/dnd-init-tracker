import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ListItem = ({ item, myTurn, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress ? () => onPress(item) : null}>
      <View style={myTurn ? styles.listItemViewMyTurn : styles.listItemView}>
        <Text style={styles.listItemText}>{item.name} </Text>
        <Text style={[styles.listItemText]}>
          {item.initScore ? "init: " + item.initScore : ""}
        </Text>
        {/* <View style={styles.listItemText}>
          <TouchableOpacity
            style={{ margin: 0, padding: 0, alignSelf: "flex-end" }}
            onPress={() => onInfoPress(item.id)}
          >
            <Text
              style={[
                {
                  color: "#aaa",
                  fontSize: 15,
                  borderWidth: 2,
                  borderColor: "#aaa",
                  borderRadius: 50,
                  padding: 12,
                  paddingTop: 2,
                  paddingBottom: -5,
                  textAlign: "center",
                  maxWidth: 20,
                },
              ]}
            >
              i
            </Text>
          </TouchableOpacity>
          {/* 
             I'm hiding this right now because this was the list view specifically for searching/adding/removing monsters and
              now we're using this for combat view's simple initiative tracking list
              and we might want it still for searching.

            <View style={styles.qtyView}>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Icon name="remove" size={18} color="#c85c5c" />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, color: "#fff", marginHorizontal: 12 }}>
              {item.quantity}
            </Text>
            <TouchableOpacity onPress={() => addItem(item.id)}>
              <Icon name="add" size={18} color="#c85c5c" />
            </TouchableOpacity>
          </View> 
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 4, //added so border won't make it jump when it's "my turn"
  },
  listItemViewMyTurn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "green",
  },

  right: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
  listItemText: { flex: 1, fontSize: 22, color: "#AAA" },
  qtyView: { flexDirection: "row", alignItems: "center" },
});

export default ListItem;
