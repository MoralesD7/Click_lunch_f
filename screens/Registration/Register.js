import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import registerStyles from "../Registration/styles_register";
import { useFonts } from 'expo-font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    // Hook para las fuentes 
    const [fontsLoaded] = useFonts({
        'Abel-Regular': require('../../assets/fonts/Abel-Regular.ttf'),
        'MochiyPopOne-Regular': require('../../assets/fonts/MochiyPopOne-Regular.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }
    // Hooks para la navegación  
    const navigation = useNavigation();

    const goToHomeScreen = () => {
        navigation.navigate('Home');
    };

    const goToLoginScreen = () => {
        navigation.navigate('Login');
    };
    // Componente principal 
    return (
        <View style={registerStyles.container}>

            <View style={registerStyles.titleContainer}>
                <Text style={registerStyles.titleText}>Registrar</Text>
            </View>

            <View style={registerStyles.formsContainer}>

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Usuario"
                        style={registerStyles.inputText} />
                    <AntDesign name="user" size={25} color="black" style={registerStyles.inputIcon} />
                </View>

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Correo"
                        style={registerStyles.inputText} />
                    <AntDesign name="mail" size={25} color="black" style={registerStyles.inputIcon} />
                </View>

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        style={registerStyles.inputText} />
                    <AntDesign name="lock" size={25} color="black" style={registerStyles.inputIcon} />
                </View>

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Confirmar contraseña "
                        secureTextEntry={true}
                        style={registerStyles.inputText} />
                    <AntDesign name="lock" size={25} color="black" style={registerStyles.inputIcon} />
                </View>

                <View style={registerStyles.registerButtonContainer}>
                    <TouchableOpacity style={registerStyles.registerButtonBox} onPress={goToHomeScreen}>
                        <Text style={registerStyles.registerButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={registerStyles.loginButtonContainer}>
                <TouchableOpacity style={registerStyles.loginButtonBox} onPress={goToLoginScreen}>
                    <Text style={registerStyles.loginButtonText}>¿Ya tienes una cuenta? Inicia sesión</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
