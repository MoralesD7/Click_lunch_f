import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FavoriteStyles from "../Favorite/styles_favorite";
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();
  const isFocusedFavorite = useIsFocused();
  const [fontsLoaded] = useFonts({
    'MochiyPopOne-Regular': require('../../assets/fonts/MochiyPopOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al eliminar de favoritos:', error);
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
            <View style={FavoriteStyles.deleteIconContainer}>
              <TouchableOpacity onPress={() => removeFromFavorites(item.id)}>
                <MaterialCommunityIcons name="delete" size={35} color={'black'} />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView style={FavoriteStyles.container}>
        <View style={FavoriteStyles.innerContainer}>
          <Animatable.View animation="slideInDown" duration={500} style={FavoriteStyles.header}>
            <Text style={FavoriteStyles.headerText}>Favoritos</Text>
          </Animatable.View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={FavoriteStyles.flatListContainer}
            data={favorites}
            renderItem={({ item }) => <CartCard item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
    </GestureHandlerRootView>
  );
};

export default Favorite;
