import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import profileStyles from "./styles_profile";
import { useFonts } from 'expo-font';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Profile() {
    // Hook para las fuentes 
    const [fontsLoaded] = useFonts({
        'Abel-Regular': require('../../assets/fonts/Abel-Regular.ttf'),
        'MochiyPopOne-Regular': require('../../assets/fonts/MochiyPopOne-Regular.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }

    // Componente principal 
    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.headerContainer}>
                <Text style={profileStyles.headerText}>Mi perfil</Text>
            </View>

            <View style={profileStyles.formsContainer}>
                <View style={profileStyles.inputBox}>
                    <TextInput
                        placeholder="Usuario"
                        style={profileStyles.inputText} />
                    <AntDesign name="user" size={25} color="black" style={profileStyles.inputIcon} />
                </View>

                <View style={profileStyles.inputBox}>
                    <TextInput
                        placeholder="Correo@gmail.com"
                        style={profileStyles.inputText} />
                    <AntDesign name="mail" size={25} color="black" style={profileStyles.inputIcon} />
                </View>

                <View style={profileStyles.inputBox}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={profileStyles.inputText} />
                    <AntDesign name="lock" size={25} color="black" style={profileStyles.inputIcon} />
                </View>

                <View style={profileStyles.logoutButtonContainer}>
                    <TouchableOpacity style={profileStyles.logoutButtonBox}>
                        <Text style={profileStyles.logoutButtonText}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
