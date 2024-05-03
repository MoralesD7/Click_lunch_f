// Favorite.js

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import styles from '../Trolley/styles_trolley';

const Favorite = () => {
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();
  const isFocusedFavorite = useIsFocused();

  useEffect(() => {
    const obtenerFavoritos = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const resultados = await AsyncStorage.multiGet(keys);
        const favoritos = resultados.map(([key, value]) => {
          return JSON.parse(value);
        });
        setFavoritos(favoritos);
      } catch (error) {
        console.error('Error al obtener los favoritos:', error);
      }
    };
    obtenerFavoritos();
  }, [isFocusedFavorite]);

  const eliminarObjeto = async (key) => {
    try {
      setFavoritos(favoritos.filter(objeto => objeto.id !== key));
      await AsyncStorage.removeItem(key);
      console.log('Objeto eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el objeto:', error);
    }
  };

  const goToDetails = (item) => {
    navigation.navigate('Details', { ...item });
  };

  const CartCard = ({ objeto }) => {
    return (
      <View style={styles.cartContainer}>
        <View style={styles.cartCard}>
          <Image source={objeto.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{objeto.name}</Text>
            <Text style={styles.ingredients}>{objeto.ingredients}</Text>
            <Text style={styles.price}>${objeto.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => goToDetails(objeto)}>
              <AntDesign name="infocirlceo" size={25} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => eliminarObjeto(objeto.id)}>
              <AntDesign name="delete" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <View style={styles.container} >
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={favoritos}
          renderItem={({ item }) => <CartCard objeto={item} />}
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Precio Total</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$50</Text>
              </View>
              <View style={{ marginHorizontal: 30 }}>
              </View>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Favorite;
