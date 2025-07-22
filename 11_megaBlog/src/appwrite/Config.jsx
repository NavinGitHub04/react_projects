import conf from '../config/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite';

import class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, content, slug, featuredImage, status, userId }) {
        try {
            const post = await this.Databases.createDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("appWrite serive :: createPost :: error", error);
        }
    }
    async deletePost(slug,{title, content, userId, featuredImage, status}) {
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                conf.appwriteDocumentId,
                slug,
                {
                    title,
                    content,
                    userId,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("appWrite serive :: deletePost :: error", error);
        }
    }
    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("appWrite serive :: getPost :: error", error);
            return false;
        }
    }
    async getPosts(Queries = [Query.equal ("sstatus", 
        "active")] ){
            try{
                await this.Databases.listDocuments(
                    conf.appwriteDatabasesId,
                    conf.appwriteCollectionId,
                    Queries,
                );
            }catch(error) {
                console.log("appWrite serive :: getPosts :: error", error);
                return false;
            }
    }
    
    // file uploded service

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("appWrite serive :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("appWrite serive :: deleteFile :: error", error);
            return false;
        }
    }   

    getFilePreview(fileId) {
         return  this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        
    }


}
import { data } from 'react-router-dom';
    const service = new Service();

export default service;