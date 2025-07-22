import conf from '../config/conf.js'
import { Client, Account, ID } from 'appwrite';


export class AuthServices{
    clint= new Client();
    Account;

    constructor(){
        this.clint
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.Account= new Account(this.clint)    
    }
    async createAccount({email, password, name}){
        try{
            await this.Account.create(ID.unique(), email, password, name);

            if(userAccount){
                //call another method
            }else{
                return userAccount;
            }

        }catch(error)
        {
            throw error;
        }
    }

    async loginAccount({email, password}){
        try{
            await this.Account.createEmailSession
            (email,password);
        }catch(error){
            throw error;
        }
    }
    async getCurrentAccount(){
        try{
         return await this.Account.get();
        }catch(error){
            console.log("appWrite serive :: getCurrencyUser :: error", error);
        }
        return null;
    }
    async logOut(){
        try{
            await this.Account.deleteSessions();

        }catch(error){
            console.log("appWrite serive :: logOut :: error", error);
        }
    }
    

}

const authServices= new AuthServices()


export default authServices