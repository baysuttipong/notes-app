import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NoteItem = ({ note }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 16,
  },
});

export default NoteItem;
