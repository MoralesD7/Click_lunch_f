import React from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import ModalPoup from "./ModalPoup"; // Importa el componente ModalPoup
import AntDesign from 'react-native-vector-icons/AntDesign';
import profileStyles from '../Profile/styles_profile';
import { isValidacionCorreo } from '../../consts/validaciones'; // Importa la función de validación del correo electrónico
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

export default function Profile() {
    const [successModalVisible, setSuccessModalVisible] = React.useState(false); // Estado para controlar la visibilidad del modal de sesión cerrada exitosamente
    const [errorModalVisible, setErrorModalVisible] = React.useState(false); // Estado para controlar la visibilidad del modal de error
    const [correo, setCorreo] = React.useState(""); // Estado para almacenar el correo electrónico del usuario
    const navigation = useNavigation(); // Hook de navegación

    // Función para cerrar sesión
    const handleLogout = () => {
        // Validación del correo electrónico
        if (!isValidacionCorreo(correo)) {
            // Si el correo electrónico no es válido, muestra el modal de error
            setErrorModalVisible(true);
            return;
        }
        // Una vez cerrada la sesión, muestra el modal de sesión cerrada exitosamente
        setSuccessModalVisible(true);
    };

    // Función para redirigir al usuario al inicio de sesión
    const redirectToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.headerContainer}>
                <Text style={profileStyles.headerText}>Mi perfil</Text>
            </View>

            <View style={profileStyles.formsContainer}>
                {/* Inputs para el perfil */}
                <View style={profileStyles.inputBox}>
                    <TextInput
                        placeholder="Usuario"
                        style={profileStyles.inputText} />
                    <AntDesign name="user" size={25} color="black" style={profileStyles.inputIcon} />
                </View>

                <View style={profileStyles.inputBox}>
                    <TextInput
                        placeholder="Correo@gmail.com"
                        style={profileStyles.inputText}
                        value={correo} // Asigna el valor del correo electrónico al input
                        onChangeText={setCorreo} // Actualiza el estado del correo electrónico al escribir en el input
                    />
                    <AntDesign name="mail" size={25} color="black" style={profileStyles.inputIcon} />
                </View>

                <View style={profileStyles.inputBox}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={profileStyles.inputText} />
                    <AntDesign name="lock" size={25} color="black" style={profileStyles.inputIcon} />
                </View>
                
                {/* Resto de los inputs y botones */}
                
                {/* Botón para mostrar el modal */}
                <TouchableOpacity style={profileStyles.logoutButtonContainer} onPress={handleLogout}>
                    <View style={profileStyles.logoutButtonBox}>
                        <Text style={profileStyles.logoutButtonText}>Cerrar sesión</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Modal de sesión cerrada exitosamente */}
            <ModalPoup visible={successModalVisible} onClose={() => {
                setSuccessModalVisible(false);
                redirectToLogin(); // Redirige al usuario al inicio de sesión
            }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={profileStyles.header}>
                        <TouchableOpacity onPress={() => setSuccessModalVisible(false)}>
                            <Image
                                source={require('../../assets/images/x.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/success.png')}
                        style={{ height: 80, width: 80, marginVertical: 10 }}
                    />
                </View>
                <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                    ¡Sesión cerrada exitosamente!
                </Text>
            </ModalPoup>

            {/* Modal de error */}
            <ModalPoup visible={errorModalVisible} onClose={() => setErrorModalVisible(false)}>
                <View style={{ alignItems: 'center' }}>
                    <View style={profileStyles.header}>
                        <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
                            <Image
                                source={require('../../assets/images/x.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/error.png')}
                        style={{ height: 80, width: 80, marginVertical: 10 }}
                    />
                </View>
                <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                    ¡Hubo un problema! Inténtalo de nuevo.
                </Text>
            </ModalPoup>
        </View>
    );
}
