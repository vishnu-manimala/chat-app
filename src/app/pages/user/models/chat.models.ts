import { UserData, Avatar, User } from '../../auth/models/login-data.model';

export interface ChatMessage{
    user: string;
    message: string;
    _id:string 
  }
export interface ChatResponseModel{
    "data": chatsModel;
    "message": string;
    "statusCode": number;
    "success": boolean;
}


export interface chatsModel{
    "__v":number;
    "_id": string;
    "admin": string;
    "createdAt": Date;
    "isGroupChat": boolean;
    "name": string;
    "participants": UserData[];
    "updatedAt": Date;
}

export interface AvailableUserResponse{
  
    "data": AvailableUser[];
    "message": string;
    "statusCode": number;
    "success": boolean;
}

export interface AvailableUser{
 
        "_id": string;
        "avatar": Avatar;
        "username": string;
        "email": string;
   
}

export interface ChatMessageResponse{
    "data": chatData[];
    "message": string;
    "statusCode": number;
    "success": boolean;
}

export interface chatData{
        "_id": string;
        "sender": {
            "_id": string;
            "avatar": Avatar;
            "username": string;
            "email": string;
        },
        "content": string;
        "attachments": [],
        "chat": string;
        "createdAt": Date;
        "updatedAt": Date;
        "__v":number;
}
