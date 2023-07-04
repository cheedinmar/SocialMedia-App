import { getUserByUsername } from "../../db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { userTransformer } from "../../transformer/user";
import { createRefreshToken } from "../../db/refreshToken";
import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid Params",
      })
    );
  }
  //is the user is registered
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or Password is Invalid",
      })
    );
  }
  //compare passwords
  const doesThePasswordMatch = await bcrypt.compare(password, user.password);
  if(!doesThePasswordMatch){
       return sendError(
         event,
         createError({
           statusCode: 400,
           statusMessage: "Username or Password is Invalid",
         })
       );
  }
  //generate tokens

  //Access token

  //Refresh token
  const { accessToken, refreshToken } = generateTokens(user);
  //save it inside db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  //add http only cookie
  sendRefreshToken(event, refreshToken)

  return {
    access_token: accessToken,
    //   refreshToken,
    user: userTransformer(user),
    // doesThePasswordMatch
  };
});
