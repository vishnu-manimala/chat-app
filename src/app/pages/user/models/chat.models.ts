import { UserData } from "../../auth/models/login-data.model";

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
