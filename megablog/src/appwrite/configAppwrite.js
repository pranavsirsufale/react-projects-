import {
  appwrite_api_endpoint,
  appwrite_bucket_id,
  appwrite_collection_id,
  appwrite_db_id,
  appwrite_project_id,
} from "../conf/confVariables.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    //! client
    this.client
      .setEndpoint(appwrite_api_endpoint)
      .setProject(appwrite_project_id);

    //! databases
    this.databases = new Databases(this.client);

    //! bucket
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        appwrite_db_id,
        appwrite_collection_id,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        appwrite_db_id,
        appwrite_collection_id,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        appwrite_db_id,
        appwrite_collection_id,
        slug
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        appwrite_db_id,
        appwrite_collection_id,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        appwrite_db_id,
        appwrite_collection_id,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  //! file upload service
  async uploadFile(file) {
    try {
      return await this.storage.createFile(appwrite_bucket_id, ID.unique, file);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId){
    try {
        await this.storage.deleteFile(appwrite_bucket_id,fileId)
        return true
    } catch (error) {
        throw error
    }
  }

  getFilePreview(fileId){
    this.databases.getFilePreview(
        appwrite_bucket_id,fileId
    )
  }

}

const service = new Service();

export default service;