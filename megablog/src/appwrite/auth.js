import { Client, Account, ID } from 'appwrite'
import {appwrite_api_endpoint,appwrite_project_id} from '../conf/confVariables.js'

export class AuthService{
    client = new Client()
    account ;

    constructor(){
        this.client
        .setEndpoint(appwrite_api_endpoint)
        .setProject(appwrite_project_id);

        this.account = new Account(this.client)
    }

    //! account creation service
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )

            if(userAccount){
                return this.login(email,password)
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)

        } catch (error) {
            throw error
        }

    }


}
const authService = new AuthService();

export default authService;



