import axios from "axios";

const baseUrl = "https://clicklunchrender.onrender.com";

// Autenticación del usuario
const auth = async (token) => {
  try {
    const res = await axios.get(`${baseUrl}/api/usuario/authUser`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return res.status === 200;
  } catch (error) {
    return false;
  }
};

// Login del usuario
const login = async (email, password) => {
  try {
    const res = await axios.post(`${baseUrl}/api/usuario/login`, {
      email: email,
      password: password,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      return res.data.message;
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

// Obtener películas (Ejemplo de uso)
const getMovies = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Obtener alimentos
const getAlimentos = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/alimento/getAlimentos`);
    if (response.status === 200) {
      return response.data.message;
    } else if (response.status === 204) {
      throw new Error("No se han registrado alimentos en esta cafetería");
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export { auth, login, getMovies, getAlimentos };
