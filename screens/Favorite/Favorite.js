
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import foods from '../../consts/foods';
import styles from '../Favorite/styles_favorite';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Favorite = () => {
  const navigation = useNavigation();
  const [favoriteFoods, setFavoriteFoods] = useState(foods);

  const toggleFavorite = (index) => {
    const updatedFoods = [...favoriteFoods];
    updatedFoods[index].isFavorite = !updatedFoods[index].isFavorite;
    setFavoriteFoods(updatedFoods);
  };

  const goToDetails = (item) => {
    navigation.navigate('Details', { ...item });
  };

  const FavoriteCard = ({ item, index }) => {
    return (
      <View style={[styles.favoriteContainer, { borderColor: 'red' }]}>
        <TouchableOpacity onPress={() => goToDetails(item)}>
          <View style={styles.favoriteCard}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavorite(index)} style={styles.favoriteButton}>
          <AntDesign name={item.isFavorite ? "heart" : "hearto"} size={25} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
      </View>
      <View style={styles.favoriteList}>
        {favoriteFoods.map((item, index) => (
          <FavoriteCard key={index} item={item} index={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Favorite;
