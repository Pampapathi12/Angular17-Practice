import { User } from "../Models/User";


export class UserService {


    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mary Smith', 'Female', 'Monthly', 'InActive'),
        new User('Mark Smith', 'Male', 'Monthly', 'Active'),
    ]


    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender:string,subType:string, status:string){
        let user = new User(name, gender,subType,status)

        this.users.push(user)
    }

}