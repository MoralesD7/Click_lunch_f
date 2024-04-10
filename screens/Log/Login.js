import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import loginStyles from "../Log/styles_login";
import { useFonts } from 'expo-font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  // hook para las fuentes 
  const [fontsLoaded] = useFonts({
    'Abel-Regular': require('../../assets/fonts/Abel-Regular.ttf'),
    'MochiyPopOne-Regular': require('../../assets/fonts/MochiyPopOne-Regular.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf')

  });

  if (!fontsLoaded) {
    return null;
  }

  //hooks para la nav  
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };
  //componente principal 
  return (
    <View style={loginStyles.container}>

      <View style={loginStyles.titleContainer}>
        <Text style={loginStyles.titleText}>Click lunch</Text>
      </View>

      <View style={loginStyles.iconContainer}>
        <Image source={require('../../assets/images/Icon_login.png')} style={loginStyles.loginIcon} />
      </View>

      <View style={loginStyles.sectionTitleContainer}>
        <Text style={loginStyles.sectionTitleText}>Inicio de sesión</Text>
      </View>

      <View style={loginStyles.formsContainer}>

        <View style={loginStyles.inputBox}>
          <TextInput
            placeholder="Correo@gmail.com"
            style={loginStyles.inputText} />
          <AntDesign name="mail" size={25} color="black" style={loginStyles.inputIcon} />
        </View>

        <View style={loginStyles.inputBox}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyles.inputText} />
          <AntDesign name="lock" size={25} color="black" style={loginStyles.inputIcon} />
        </View>

        <View style={loginStyles.loginButtonContainer}>
          <TouchableOpacity style={loginStyles.loginButtonBox} onPress={goToHomeScreen}>
            <Text style={loginStyles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={loginStyles.registerButtonContainer}>
        <TouchableOpacity style={loginStyles.registerButtonBox} onPress={goToRegisterScreen}>
          <Text style={loginStyles.registerButtonText}>¿No tienes una cuenta aun? Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
