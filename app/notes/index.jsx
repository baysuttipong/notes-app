import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import NoteList from "../../components/NoteList";
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
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Note</Text>
            <TextInput
              style={styles.input}
              placeholder="note..."
              placeholderTextColor="#aaa"
              value={newNote}
              onChangeText={setNewNote}
            />
            <View style={styles.modalBottons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                <Text style={styles.saveBottonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  modalBottons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    marginRight: 10,
    backgroundColor: "#CCC",
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  saveBottonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default NoteScreen;
