import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";


// when u inject the inside class we need to tell the angulal meta data object for class
// we use inject

// we need to do , but not on the service which one we inject, 
// only recieving service only inject

@Injectable()


export class UserService {


    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mary Smith', 'Female', 'Monthly', 'InActive'),
        new User('Mark Smith', 'Male', 'Monthly', 'Active'),
    ]

    // injecting logger service into user service

    constructor(private logger: LoggerService){

    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit(user); // detail of event holding the event and data
        console.log('event emit', this.OnShowUserDetails, user)
    }


    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender:string,subType:string, status:string){
        let user = new User(name, gender,subType,status)

        this.users.push(user)
        // let logger = new LoggerService();
        // logger.LogMessage(name,status) // this explicity instance injecting

        this.logger.LogMessage(name,status) // telling to angular inject the using the injecta instance in constructor
    }

}