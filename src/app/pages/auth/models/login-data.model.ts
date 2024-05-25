import { RegistrationData } from "./registration-data.model";

export interface LoginData{
    username: string;
    password: string;
}

export interface Avatar{
    "url": string;
    "localPath": string;
    "_id": string;
}

export interface UserData extends RegistrationData{
    "_id" : string;
    "avatar" :Avatar;
    "loginType": string;
    "isEmailVerified": boolean;
    "createdAt": Date;
    "updatedAt": Date;
    "__v": number;
}
export interface User{
    "user": UserData;
    "accessToken": string;
    "refreshToken": string;
}

export interface LoginResponse{
    "statusCode": number;
    "data" : User;
    "message": string;
    "success": boolean;
}
