import { StyleSheet, Text, View, FlatList } from "react-native";
import NoteItem from "./NoteItem";
import React from "react";

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

export default NoteList;
