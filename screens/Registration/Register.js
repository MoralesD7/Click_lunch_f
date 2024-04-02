import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../Registration/styles_register";
import { useFonts } from 'expo-font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    // hook para las fuentes 
    const [fontsLoaded] = useFonts({
        'Abel-Regular': require('../../assets/fonts/Abel-Regular.ttf'),
        'MochiyPopOne-Regular': require('../../assets/fonts/MochiyPopOne-Regular.ttf')
    });
    if (!fontsLoaded) {
        return null;
    }
    //cambiar entre pantallas 
    const navigation = useNavigation();

    const goToHomeScreen = () => {
        navigation.navigate('Home');
    };

    const goToLoginScreen = () => {
        navigation.navigate('Login');
    };
    //componente principal 
    return (
        <View style={styles.Cont_P}>

            <View style={styles}>
                <Text style={styles.txt_registro}>Registrar</Text>
            </View>

            <View style={styles.Cont_forms}>

                <View style={styles.cajatexto_usuario}>
                    <TextInput
                        placeholder="Usuario"
                        style={styles.inputText} />
                    <AntDesign name="user" size={25} color="black" style={styles.icon_user} />
                </View>

                <View style={styles.cajatexto_mail}>
                    <TextInput
                        placeholder="Correo"
                        style={styles.inputText} />
                    <AntDesign name="mail" size={25} color="black" style={styles.icon_lock} />
                </View>

                <View style={styles.cajatexto_password}>
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        style={styles.inputText} />
                    <AntDesign name="lock" size={25} color="black" style={styles.icon_lock} />
                </View>

                <View style={styles.cajatexto_password}>
                    <TextInput
                        placeholder="Confirmar contraseña "
                        secureTextEntry={true}
                        style={styles.inputText} />
                    <AntDesign name="lock" size={25} color="black" style={styles.icon_lock} />
                </View>

                <View style={styles.P_boton_registrar}>
                    <TouchableOpacity style={styles.cajaboton_registrar} onPress={goToHomeScreen}>
                        <Text style={styles.txtboton}>Registrar</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.P_boton_iniciar_sesion}>
                <TouchableOpacity style={styles.cajaboton_iniciar_sesion} onPress={goToLoginScreen}>
                    <Text style={styles.txt_iniciar}>¿Ya tienes una cuenta? inicia sesíon</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
