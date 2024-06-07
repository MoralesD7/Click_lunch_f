import React, { useState } from 'react';
import { Button, Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Home/styles_details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const item = route.params;

  const guardarObjeto = async () => {
    try {
      // Asegúrate de que los nombres de las propiedades coincidan con los esperados en Trolley
      const itemToSave = {
        id: item.id,
        name: item.nombre,  // Asegúrate de usar "name" en lugar de "nombre"
        image: { uri: item.url }, // Usa "image" en lugar de "url" y asegúrate de que sea un objeto con "uri"
        ingredients: item.descripcion, // Usa "ingredients" en lugar de "descripcion"
        price: item.costo, // Usa "price" en lugar de "costo"
      };

      await AsyncStorage.setItem(item.id.toString(), JSON.stringify(itemToSave));
      console.log('Objeto JSON guardado exitosamente');
      setModalVisible(true);
      navigation.navigate('Carrito', { refresh: true });
    } catch (error) {
      console.error('Error al guardar el objeto JSON:', error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.imageContainer}>
            <View style={styles.imageBorder}>
              <Image source={{ uri: item.url }} style={styles.image} />
            </View>
          </View>
          <View style={styles.details}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                  <Text>Contenido del Modal</Text>
                  <Button title="Cerrar Modal" onPress={() => setModalVisible(!modalVisible)} />
                </View>
              </View>
            </Modal>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailsTitle}>{item.nombre}</Text>
            </View>
            <View style={styles.detailsInfo}>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Descripción: {item.descripcion}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Precio: ${item.costo}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Tiempo de preparación: {item.tiempo_preparacion} minutos</Text>
              </View>
              <TouchableOpacity
                style={styles.addToCartBtn}
                onPress={guardarObjeto}
              >
                <Text style={styles.addToCartText}>Agregar al Carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default Details;
