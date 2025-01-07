import { appwrite_api_endpoint, appwrite_collection_id, appwrite_db_id, appwrite_project_id } from '../conf/confVariables.js'
import { Client, ID,Databases,Storage,Query  } from 'appwrite'

export class Service{
    client = new Client()
    databases ;
    storage;
    
    constructor(){
        //! client
        this.client
        .setEndpoint(appwrite_api_endpoint)
        .setProject(appwrite_project_id);

        //! databases
        this.databases = new Databases(this.client)

        //! bucket
        this.storage = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(appwrite_db_id,appwrite_collection_id,slug,{
                title,
                content,
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(appwrite_db_id,appwrite_collection_id,slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(appwrite_db_id,appwrite_collection_id,slug)
            return true
        } catch (error) {
            throw error
        }

    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(appwrite_db_id,appwrite_collection_id,slug)
        } catch (error) {
            throw error
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(appwrite_db_id,appwrite_collection_id,Query({
                
            }))
        } catch (error) {
            throw error
        }
    }


}

const service = new Service()

export default service;