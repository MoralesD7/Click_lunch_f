import { Button, Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Home/styles_details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import foods from '../../consts/foods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const Details = ({ navigation, route }) => {

  //Ojo aquí cuate, checate esta

  //Se crea un estado en react para controlar cuando se ve el modal
  const [modalVisible, setModalVisible] = useState(false);

  const item = route.params;

  //Primero convertimos a JSON el "objeto" food que tienes en foods.js
  const foodDetails = foods.find(food => food.id === item.id);

  // Convertir foodDetails a una cadena JSON
  const foodDetailsString = JSON.stringify(foodDetails);

  //Luego hacemos una función que se encarga de guardar localmente el objeto en cuestión
  //Esta función solo sirve cuando tenemos un objeto a la vez, así que si la necesitas para multiples objetos entonces debes de cambiar la manera en la que llamas al foods
  const guardarObjeto = async () => {
    try {
      // Guardar el objeto JSON en el almacenamiento local

      await AsyncStorage.setItem(foodDetails.id.toString(), foodDetailsString);
      //await AsyncStorage.removeItem(foodDetails.id.toString());
      console.log('Objeto JSON guardado exitosamente');
      setModalVisible(true)
      // Actualizar el estado de objetosJSON en el componente del carrito
      navigation.navigate('Carrito', { refresh: true });
    } catch (error) {
      //Si hay algún error aquí aparecerá
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
              <Image source={item.image} style={styles.image} />
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
              <Text style={styles.detailsTitle}>{item.name}</Text>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.iconContainer}>
                  <AntDesign name="hearto" size={28} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.detailsInfo}>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Descripción: {foodDetails.description}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Tiempo de preparación: {foodDetails.preparationTime}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Precio: ${foodDetails.price}</Text>
                <TouchableOpacity
                  style={styles.addToCartBtn}
                  onPress={() => { guardarObjeto() }}
                >
                  <AntDesign name="plus" size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default Details;