import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text, Image } from 'react-native'; // Importa Text desde react-native
import styles from "../Home/styles_home";
import AntDesign from 'react-native-vector-icons/AntDesign'; // Importa AntDesign
import categories from '../../consts/categories';
import foods from '../../consts/foods';

import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importa GestureHandlerRootView

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

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
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
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
      <TouchableHighlight
        underlayColor={'white'}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image source={food.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
            <Text style={{ fontSize: 14, color: 'gray', marginTop: 2 }}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              ${food.price}
            </Text>
            <View style={styles.addToCartBtn}>
              <AntDesign name="plus" size={20} color={'white'} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };



  return (
    <GestureHandlerRootView>
      <View style={styles.Cont_P}>
        <View style={styles.header}>
          <View>
            <View style={styles.contenedor_txt1}>
              <Text style={styles.txt_b}>¡¡Bienvenido!!</Text>
            </View>
            <Text style={styles.txt_b__2}>¿Qué deseas hoy?</Text>
          </View>
        </View>
        <View style={styles.Buscador_c}>
          <AntDesign name="search1" size={20} color="gray" style={styles.Icon_busqueda} />
          <TextInput
            style={styles.Busqueda_entrada}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <View>
          <ListCategories />
        </View>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ minHeight: '100%' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {foods.map((item, index) => (
          <Card key={index} food={item} />
        ))}
      </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Home;
