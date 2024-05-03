import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import registerStyles from "../Registration/styles_register";
import { useFonts } from 'expo-font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { isValidacionNombreUsuario, isValidacionCorreo, isValidacionContraseña, compararContraseñas } from '../../consts/validaciones';

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
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");
    const [nombreUsuarioError, setNombreUsuarioError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [contraseñaError, setContraseñaError] = useState("");
    const [confirmarContraseñaError, setConfirmarContraseñaError] = useState("");

    const handleRegister = () => {
        // Validación del nombre de usuario
        if (!isValidacionNombreUsuario(nombreUsuario)) {
            setNombreUsuarioError("El nombre de usuario debe tener al menos 4 caracteres");
            return;
        } else {
            setNombreUsuarioError("");
        }

        // Validación del correo electrónico
        if (!isValidacionCorreo(email)) {
            setEmailError("Correo electrónico inválido");
            return;
        } else {
            setEmailError("");
        }

        // Validación de la contraseña
        if (!isValidacionContraseña(contraseña)) {
            setContraseñaError("La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número.");
            return;
        } else {
            setContraseñaError("");
        }

        // Comparación de la contraseña y su confirmación
        if (!compararContraseñas(contraseña, confirmarContraseña)) {
            setConfirmarContraseñaError("Las contraseñas no coinciden");
            return;
        } else {
            setConfirmarContraseñaError("");
        }
        navigation.navigate('Home');

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
                        style={registerStyles.inputText}
                        value={nombreUsuario}
                        onChangeText={setNombreUsuario} />
                    <AntDesign name="user" size={25} color="black" style={registerStyles.inputIcon} />
                </View>
                {nombreUsuarioError ? <Text style={registerStyles.errorText}>{nombreUsuarioError}</Text> : null}

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Correo"
                        style={registerStyles.inputText}
                        value={email}
                        onChangeText={setEmail} />
                    <AntDesign name="mail" size={25} color="black" style={registerStyles.inputIcon} />
                </View>
                {emailError ? <Text style={registerStyles.errorText}>{emailError}</Text> : null}

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        style={registerStyles.inputText}
                        value={contraseña}
                        onChangeText={setContraseña} />
                    <AntDesign name="lock" size={25} color="black" style={registerStyles.inputIcon} />
                </View>
                {contraseñaError ? <Text style={registerStyles.errorText}>{contraseñaError}</Text> : null}

                <View style={registerStyles.inputBox}>
                    <TextInput
                        placeholder="Confirmar contraseña"
                        secureTextEntry={true}
                        style={registerStyles.inputText}
                        value={confirmarContraseña}
                        onChangeText={setConfirmarContraseña} />
                    <AntDesign name="lock" size={25} color="black" style={registerStyles.inputIcon} />
                </View>
                {confirmarContraseñaError ? <Text style={registerStyles.errorText}>{confirmarContraseñaError}</Text> : null}

                <View style={registerStyles.registerButtonContainer}>
                    <TouchableOpacity style={registerStyles.registerButtonBox} onPress={handleRegister}>
                        <Text style={registerStyles.registerButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={registerStyles.loginButtonContainer}>
                <TouchableOpacity style={registerStyles.loginButtonBox} onPress={() => navigation.navigate('Login')}>
                    <Text style={registerStyles.loginButtonText}>¿Ya tienes una cuenta? Inicia sesión</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
