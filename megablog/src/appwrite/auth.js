import { Client, Account, ID } from 'appwrite'
import {appwrite_api_endpoint,appwrite_project_id} from '../conf/confVariables.js'


//! client creation 
const client = new Client()
.setEndpoint(appwrite_api_endpoint)
.setProject(appwrite_project_id)


const account = new Account(client)

//! user account creation
const user = await account.create(
    ID.unique(),
    

)




