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
            return await this.databases.createDocument(appwrite_db_id,appwrite_collection_id, ID.unique())
        } catch (error) {
            throw error
        }
    }




}


const service = new Service()


export default service;


