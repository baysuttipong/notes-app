import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import React from "react";

const AddNoteModal = ({
  modalVisible,
  setModalVisible,
  newNote,
  setNewNote,
  addNote,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default AddNoteModal;
