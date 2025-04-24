import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NoteList from "../../components/NoteList";
import AddNoteModal from "../../components/AddNoteModal";
import React from "react";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Note 1" },
    { id: 2, text: "Note 2" },
    { id: 3, text: "Note 3" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text: newNote }]);
    setNewNote("");
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
      <TouchableOpacity
        style={styles.addBotton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addBottonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  addBotton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  addBottonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NoteScreen;
