import React from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import ModalPoup from "./ModalPoup"; // Importa el componente ModalPoup
import AntDesign from 'react-native-vector-icons/AntDesign';
import profileStyles from '../Profile/styles_profile';


export default function Profile() {
    const [visible, setVisible] = React.useState(false);

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
                
                {/* Resto de los inputs y botones */}
                
                {/* Botón para mostrar el modal */}
                <TouchableOpacity style={profileStyles.logoutButtonContainer} onPress={() => setVisible(true)}>
                    <View style={profileStyles.logoutButtonBox}>
                        <Text style={profileStyles.logoutButtonText}>Cerrar sesión</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Modal de confirmación */}
            <ModalPoup visible={visible}>
                <View style={{ alignItems: 'center' }}>
                    <View style={profileStyles.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
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
        </View>
    );
}
