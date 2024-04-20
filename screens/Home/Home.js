import React, { useState, useEffect } from 'react';
import { View, ScrollView, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import styles from "../Home/styles_home";
import AntDesign from 'react-native-vector-icons/AntDesign';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [searchActive, setSearchActive] = useState(false);
  const navigation = useNavigation();

  const filterFoodsByName = (text) => {
    const filtered = foods.filter(food =>
      food.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const clearSearch = () => {
    setSearchText('');
    setFilteredFoods(foods);
    setSearchActive(false);
  };

  const ListCategories = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.C_categorias}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor: selectedCategoryIndex === index ? '#F9813A' : '#fedac5',
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 30, width: 30, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color: selectedCategoryIndex === index ? '#FFF' : '#F9813A',
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({ food }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', food)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -30 }}>
            <Image source={food.image} style={{ height: 120, width: '100%' }} resizeMode="contain" />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.foodName}>{food.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={styles.foodPrice}>${food.price}</Text>
              <TouchableOpacity
                style={[styles.addToCartBtn, styles.buyButton]}
                onPress={() => {
                  // Aquí puedes manejar la acción de agregar al carrito
                }}
              >
                <AntDesign name="plus" size={20} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    filterFoodsByName(searchText);
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
        <View>
          <ListCategories />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {filteredFoods.map((item, index) => (
            <Card key={index} food={item} />
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Home;
