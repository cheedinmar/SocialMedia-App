import jwt from "jsonwebtoken"
const generateAccessToken =(user)=>{
    const config = useRuntimeConfig ()
    return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
        expiresIn: '10m'
    });
}
const generateRefreshToken = (user) => {
       const config = useRuntimeConfig();
       return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
         expiresIn: "4h",
       });
};
export const decodeRefreshToken = (token) =>{
  const config = useRuntimeConfig()
  try{
    return jwt.verify(token, config.jwtRefreshSecret)
  }catch(err){
    console.log(err);
  }
}
export const decodeAccessToken = (token) => {
  const config = useRuntimeConfig();
  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch (err) {
    console.log(err, 'error')
  }
};
export const generateTokens = (user)=>{
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
}

export const sendRefreshToken = (event, token) =>{
  console.log(event, 'event in utils')
    setCookie(event, "refresh_token", token, {
      httpOnly:true,
      sameSite:true
    });
    
}
