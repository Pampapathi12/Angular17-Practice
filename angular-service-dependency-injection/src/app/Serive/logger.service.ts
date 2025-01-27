import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'// we want provide this service in module level so no need to provode in the app module
})
export class LoggerService{


    LogMessage(name: string, status: string){
        console.log(`A new user with name ${name}  width status ${status} is added to user list.`)
    }

}