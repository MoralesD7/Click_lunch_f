import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from "../Information_log/styles_information_login";


const InformationLogin = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#F9F2DD', flex: 1 }}>
      <View style={styles.header}>
        <AntDesign name="left" size={30} onPress={navigation.goBack} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/Icon_login.png')} style={styles.image} />
      </View>
      <LinearGradient
        colors={['#EF6106', '#F0AE03']} // Colores del degradado
        style={styles.details}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.gradient}>
          <View style={styles.detailsHeader}>
            <Text style={styles.detailsTitle}>Click Lunch: Tu solución para evitar las tediosas filas de comida. ¡Inicia sesión para satisfacer tu apetito! Si aún no tienes una cuenta, regístrate ahora.</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.leftButton]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.rightButton, { backgroundColor: '#F4C241' }]}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default InformationLogin;
