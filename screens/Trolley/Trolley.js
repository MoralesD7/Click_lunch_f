import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import foods from '../../consts/foods';
import styles from '../Trolley/styles_trolley';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Trolley = () => {
  const navigation = useNavigation();

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartContainer}>
        <View style={styles.cartCard}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.ingredients}>{item.ingredients}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}>3</Text>
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity onPress={() => {/* Lógica para agregar un ítem al carrito */}}>
                <AntDesign name="pluscircleo" size={25} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {/* Lógica para eliminar un ítem del carrito */}}>
                <FontAwesome name="remove" size={25} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <View style={styles.container} onPress={() => {/* Lógica para manejar el evento onPress */}}>
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={foods}
          renderItem={({ item }) => <CartCard item={item} />}
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Price</Text>
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

export default Trolley;
