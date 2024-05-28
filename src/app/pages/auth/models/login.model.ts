
    export interface Login{
    "data":UserDetails;
    "status": string;
    "token": string;
    "refresh_token": string;
}

export interface UserDetails{  
        "_id": string;
        "name": string;
        "email": string;
        "contactNumber": number;
        "password": string;
        "profileImage"?: [],
        "createdAt": Date;
        "idPhotos"?: [],
        "islicenceVerified"?: false,
        "isIdVerified"?: false,
        "isPhoneVerified"?: false,
        "isEmailVerified"?: false,
        "ownsVehicle"?: false,
        "vehicleCategory"?: [],
        "licencePhotos"?: [],
        "following"?: [],
        "followers"?: [],
        "isAdmin"?: false,
        "isBlocked"?: false,
        "__v": number;
}

export interface AllUsers{
    "data":UserDetails[];
    "status": string;
    "message": string;
}