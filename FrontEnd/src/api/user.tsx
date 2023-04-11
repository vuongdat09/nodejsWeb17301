import instance from "./instace";
import { ilogin , iRegister} from "../interface/user";


export const login = (data:ilogin)=>{
    return instance.post("/signin",data)
}

export const dangky = (data:iRegister)=>{
    return instance.post("/signup",data)
}