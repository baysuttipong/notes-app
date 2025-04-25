import { database } from "./appwrite";

const databaseService = {
  async listDocuments(dbId, colId) {
    try {
      const response = await database.listDocuments(dbId, colId);
      return response.documents || [];
    } catch (error) {
      console.error("error in listDocuments", error.message);
      return { error: error.message };
    }
  },

  //create a new document
  async createDocument(dbId, colId, data, id = null) {
    try {
      return await database.createDocument(dbId, colId, id || undefined, data);
    } catch (error) {
      console.error("error in createDocument", error.message);
      return { error: error.message };
    }
  },

  //update a document
  async updateDocument(dbId, colId, id, data) {
    try {
      return await database.updateDocument(dbId, colId, id, data);
    } catch (error) {
      console.error("error in update Document", error.message);
      return { error: error.message };
    }
  },

  //Delete a document
  async deleteDocument(dbId, colId, docId) {
    try {
      await database.deleteDocument(dbId, colId, docId);
      return { success: true };
    } catch (error) {
      console.error("error in deleteDocument", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
