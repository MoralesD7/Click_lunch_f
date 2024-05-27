import { Button, Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Home/styles_details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import foods from '../../consts/foods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const Details = ({ navigation, route }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const item = route.params;

  const foodDetails = foods.find(food => food.id === item.id);

  const foodDetailsString = JSON.stringify(foodDetails);

  const guardarObjeto = async () => {
    try {
      await AsyncStorage.setItem(foodDetails.id.toString(), foodDetailsString);
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
              </View>
              <TouchableOpacity
                style={styles.addToCartBtn}
                onPress={() => { guardarObjeto() }}
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
