//username
//password

//khi lay duoc accessToken, luu accessToken vao AsyncStorage

export const login = async (data) => {
    console.log(data);  
    return await fetch('http://192.168.1.24:6000/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
          return res.data;
          //luu token vao AsyncStorage

      }).catch(error => {
          return error;
      });
}