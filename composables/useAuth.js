export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };
  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };
  const login = ({ username, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        setToken(data.access_token);
        setUser(data.user);
        resolve(true)
      } catch (err) {
        reject(err)
      }
    });
  };
  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
      const data = await  $fetch('/api/auth/refresh')
      setToken(data.access_token);
      resolve(true)
      } catch (err) {
        reject(err);
      }
    });
  };
  ;
  const initAuth = () =>{
    return new Promise (async(resolve, reject)=>{
        alert('hey')
        try{
            await refreshToken()
            resolve(true)
        }catch(err){
            reject(err)
        }
    })
  }
  return {
    login,
    useAuthToken,
    useAuthUser,
    initAuth,
  };
};
