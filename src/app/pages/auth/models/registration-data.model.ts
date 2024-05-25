import { User } from "./login-data.model";

export interface RegistrationData {
    "email": string;
    "password": string;
    "role": string;
    "username": string;
}

export interface RegistrationResponse{
    "statusCode": number;
    "data": any;
    "message": string;
    "success": boolean;
}