import axios from "axios";
const baseUrl = "https://clicklunchrender.onrender.com";

const auth = (token) => {
  axios
    .get(`${baseUrl}/api/usuario/authUser`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      return false;
    });
};

const login = (email, password) => {
  axios.post(`${baseUrl}/api/usuario/login`,{
		email: email,
		password: password,
	}).then((res)=>{
		if(res.status === 200){
			const data = res.data
			return data;	
		} else {
			return res.data.message
		}
	}).catch((error)=>{
		console.log(error.message);
	});
};

module.exports({
  auth,
  login,
});
