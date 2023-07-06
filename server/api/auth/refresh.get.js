import { sendError } from "h3";
import {getRefreshTokenbyToken} from "../../db/refreshToken"
import { decodeRefreshToken, generateTokens } from "../../utils/jwt";
import { getUserById } from "../../db/users";
export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, "refresh_token");
    if(!refreshToken){
        return sendError(event, createError({
            statusCode:401,
            statusMessage:'Refresh token is invalid'
        }))
    }
    const rToken =  getRefreshTokenbyToken(refreshToken);
     if (!rToken) {
       return sendError(
         event,
         createError({
           statusCode: 401,
           statusMessage: "Refresh token is invalid2",
         })
       );
     }
     const token = decodeRefreshToken(refreshToken)
     try{
        const user = await getUserById(token.userId)
        const {accessToken} = generateTokens(user)
        return {access_token :accessToken}
      
     }catch(err){
        return sendError(
          event,
          createError({
            statusCode: 401,
            statusMessage: "Something went wrong",
          })
        );
     }
    
});