import conf from "../../Config/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectid); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
           const userAccount = await this.account.create(ID.unique(),email, password, name);
           
           if (userAccount) {
                 //if account created directly login the user
                 return this.login({email,password});
           } else {
                return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            
        } catch (error) {
            console.log("Appwrite Service  :: getCurrentUser ::error",error);
            
        }
    }

}
const authService = new AuthService();

export default authService;