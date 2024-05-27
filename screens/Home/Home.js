import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import styles from "../Home/styles_home";
import AntDesign from 'react-native-vector-icons/AntDesign';
import foods from '../../consts/foods';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sections = [
  { name: 'Todo', image: require('../../assets/images/todo.png') },
  { name: 'Comida Rápida', image: require('../../assets/images/comidarapida.png') },
  { name: 'Comida Preparada', image: require('../../assets/images/comidapreparada.png') },
  { name: 'Bebidas', image: require('../../assets/images/bebidas.png') },
  { name: 'Frituras', image: require('../../assets/images/frituras.png') },
  { name: 'Dulces', image: require('../../assets/images/dulces.png') }
];

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [searchActive, setSearchActive] = useState(false);
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

  const clearSearch = () => {
    setSearchText('');
    setFilteredFoods(foods);
    setSearchActive(false);
  };

  const markFavorites = (foods, favorites) => {
    return foods.map(food => ({
      ...food,
      isFavorite: favorites.some(fav => fav.id === food.id)
    }));
  };

  const toggleFavorite = async (food) => {
    try {
      const isFavorite = favorites.some(item => item.id === food.id);
      let updatedFavorites;

      if (isFavorite) {
        updatedFavorites = favorites.filter(item => item.id !== food.id);
      } else {
        updatedFavorites = [...favorites, food];
      }

      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error al actualizar favoritos:', error);
    }
  };
  const isFavorite = (food) => {
    return favorites.some(item => item.id === food.id);
  };

  const Card = ({ food, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', food)}>
        <View style={{ ...styles.card, backgroundColor: '#FADDB4' }} key={index}>
          <View style={{ alignItems: 'center', top: -30 }}>
            <Image source={food.image} style={{ height: 100, width: '100%' }} resizeMode="contain" />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.foodName}>{food.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={styles.foodPrice}>${food.price}</Text>
              <TouchableOpacity onPress={() => toggleFavorite(food)} style={{ backgroundColor: isFavorite(food) ? '#FF6347' : '#F9813A', borderRadius: 20, padding: 7, marginBottom: 15 }}>
                <AntDesign name={isFavorite(food) ? 'heart' : 'hearto'} size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (searchText === '') {
      setFilteredFoods(foods);
    } else {
      const filtered = foods.filter(food =>
        food.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredFoods(filtered);
    }
    setSearchActive(!!searchText);
  }, [searchText]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.Cont_P}>
        <View style={{ ...styles.Buscador_c, paddingHorizontal: 10 }}>
          <AntDesign name="search1" size={20} color="gray" style={{ marginRight: 5 }} />
          <TextInput
            style={{ ...styles.Busqueda_entrada, marginRight: 5 }}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchActive && (
            <TouchableOpacity onPress={clearSearch} style={{ marginLeft: 5 }}>
              <AntDesign name="close" size={25} color="gray" />
            </TouchableOpacity>
          )}
        </View>
        {!searchActive && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sections.map((section, index) => (
              <View key={index}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => console.log(section.name)}
                  style={{
                    width: 90,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FCF3E6',
                    borderRadius: 10,
                    borderColor: '#F9813A',
                    borderWidth: 2,
                    margin: 16,
                    elevation: 5,
                  }}
                >
                  <Image
                    source={section.image}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#F9813A',
                      fontWeight: '600',
                      marginTop: 5,
                    }}
                  >
                    {section.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {markFavorites(filteredFoods, favorites).map((item, index) => (
            <Card key={index} food={item} index={index} toggleFavorite={toggleFavorite} />
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Home;
