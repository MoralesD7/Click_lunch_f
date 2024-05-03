import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import loginStyles from "../Log/styles_login";
import { useFonts } from 'expo-font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { isValidacionCorreo, isValidacionContraseña } from '../../consts/validaciones';

export default function Login() {
  // hook para las fuentes 
  const [fontsLoaded] = useFonts({
    'Abel-Regular': require('../../assets/fonts/Abel-Regular.ttf'),
    'MochiyPopOne-Regular': require('../../assets/fonts/MochiyPopOne-Regular.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf')
  });

  //hooks para la nav  
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    // Validación del correo electrónico
    if (!isValidacionCorreo(email)) {
      setEmailError("Correo electrónico inválido");
      return;
    } else {
      setEmailError("");
    }

    // Validación de la contraseña
    if (!isValidacionContraseña(password)) {
      setPasswordError("La contraseña debe contener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.");
      return;
    } else {
      setPasswordError("");
    }

    // Aquí puedes continuar con la lógica de inicio de sesión
    navigation.navigate('Home');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.iconContainer}>
        <Image source={require('../../assets/images/Icon_login.png')} style={loginStyles.loginIcon} />
      </View>

      <View style={loginStyles.sectionTitleContainer}>
        <Text style={loginStyles.sectionTitleText}>¡Bienvenido!</Text>
      </View>

      <View style={loginStyles.formsContainer}>
        <View style={loginStyles.inputBox}>
          <TextInput
            placeholder="Correo@gmail.com"
            style={loginStyles.inputText}
            value={email}
            onChangeText={setEmail} />
          <AntDesign name="mail" size={25} color="black" style={loginStyles.inputIcon} />
        </View>
        {emailError ? <Text style={loginStyles.errorText}>{emailError}</Text> : null}

        <View style={loginStyles.inputBox}>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={true}
            style={loginStyles.inputText}
            value={password}
            onChangeText={setPassword} />
          <AntDesign name="lock" size={25} color="black" style={loginStyles.inputIcon} />
        </View>
        {passwordError ? <Text style={loginStyles.errorText}>{passwordError}</Text> : null}

        <View style={loginStyles.loginButtonContainer}>
          <TouchableOpacity style={loginStyles.loginButtonBox} onPress={handleLogin}>
            <Text style={loginStyles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={loginStyles.registerButtonContainer}>
        <TouchableOpacity style={loginStyles.registerButtonBox} onPress={() => navigation.navigate('Home')}>
          <Text style={loginStyles.registerButtonText}>¿No tienes una cuenta aún? Regístrate</Text>
        </TouchableOpacity>
      </View>

      <View style={loginStyles.registerButtonContainer}>
        <TouchableOpacity style={loginStyles.registerButtonBox} onPress={() => navigation.navigate('Information_login')}>
          <Text style={loginStyles.registerButtonText}>Más información</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
