import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'; // Importa la biblioteca de animaciones
import FavoriteStyles from "../Favorite/styles_favorite";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();
  const isFocusedFavorite = useIsFocused();

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesString = await AsyncStorage.getItem('favorites');
        if (favoritesString) {
          const favoritesData = JSON.parse(favoritesString);
          setFavorites(favoritesData);
        }
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
      }
    };
    loadFavorites();
  }, [isFocusedFavorite]);

  const removeFromFavorites = async (id) => {
    try {
      const updatedFavorites = favorites.filter(item => item.id !== id);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      console.log('Elemento eliminado de favoritos exitosamente');
    } catch (error) {
      console.error('Error al eliminar de favoritos:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      // Lógica para agregar el elemento al carrito
      console.log('Elemento agregado al carrito:', item);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  };

  const goToDetails = (item) => {
    navigation.navigate('Details', { ...item });
  };

  const CartCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => goToDetails(item)}>
        <Animatable.View animation="fadeIn" duration={500} style={FavoriteStyles.cartContainer}>
          <Animatable.View animation="bounceIn" delay={100} style={FavoriteStyles.cartCard}>
            <Image source={item.image} style={FavoriteStyles.image} />
            <View style={FavoriteStyles.details}>
              <Text style={FavoriteStyles.name}>{item.name}</Text>
              <Text style={FavoriteStyles.ingredients}>{item.ingredients}</Text>
              <Text style={FavoriteStyles.price}>${item.price}</Text>
            </View>
            <View style={FavoriteStyles.quantityContainer}>
              <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
                <AntDesign name="delete" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView style={FavoriteStyles.container}>
      <View style={FavoriteStyles.container}>
        <Animatable.View animation="slideInDown" duration={500} style={FavoriteStyles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={FavoriteStyles.headerText}>Favoritos</Text>
        </Animatable.View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={FavoriteStyles.flatListContainer}
          data={favorites}
          renderItem={({ item }) => <CartCard item={item} />}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Favorite;
