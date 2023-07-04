import {getUserByUsername} from "../../db/users"
export default defineEventHandler(async(event)=>{
    const body = await readBody(event)
    const {username, password} = body
    if(!username || !password){
        return sendError(event, createError({
            statusCode:400,
            statusMessage:"Invalid Params"
        }))
    }
    //is the user is registered
    const user = await getUserByUsername(username)
    if(!user){
           return sendError(event, createError({
            statusCode:400,
            statusMessage:"Username or Password is Invalid"
        }))
    }
    


    //compare passwords



    //generate tokens
    return {
        user:user
    }
})