const isValidacionNombreUsuario = (nombreUsuario) => {
  return nombreUsuario.length >= 4;
};

const isValidacionCorreo = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
};

const isValidacionContraseña = (contraseña) =>{
  const contraseñaRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,80}$/;
  return contraseñaRegex.test(contraseña);
};
const compararContraseñas = (contraseña, confirmarContraseña) => {
  return contraseña === confirmarContraseña;
};

export { isValidacionCorreo, isValidacionContraseña,isValidacionNombreUsuario,compararContraseñas};
