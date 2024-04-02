import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../Log/styles_login";
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

  //cambiar entre pantallas 
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.Cont_P}>

      <View style={styles.IconContainer}>
        <Image source={require('../../assets/images/Icon_login.png')} style={styles.Icon_login} />
      </View>

      <View style={styles}>
        <Text style={styles.txt_inicio}>Inicio de sesión</Text>
      </View>

      <View style={styles.Cont_forms}>

        <View style={styles.cajatexto_mail}>
          <TextInput
            placeholder="Correo@gmail.com"
            style={styles.inputText} />
          <AntDesign name="mail" size={25} color="black" style={styles.icon_mail} />
        </View>

        <View style={styles.cajatexto_password}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputText} />
          <AntDesign name="lock" size={25} color="black" style={styles.icon_lock} />
        </View>

        <View style={styles.P_boton_iniciar_seción}>
          <TouchableOpacity style={styles.cajaboton_iniciar_seción} onPress={goToHomeScreen}>
            <Text style={styles.txtboton}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.P_boton_registrar}>
        <TouchableOpacity style={styles.cajaboton_registrar} onPress={goToRegisterScreen}>
          <Text style={styles.txt_registrar}>¿No tienes una cuenta aun? Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}