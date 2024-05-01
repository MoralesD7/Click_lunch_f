import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { GestureHandlerRootView, FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../Trolley/styles_trolley';

const Trolley = () => {
  const [objetosJSON, setObjetosJSON] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)
  const [itemCounts, setItemCounts] = useState({});
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const obtenerTodosLosElementos = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const resultados = await AsyncStorage.multiGet(keys);
        const objetosJSON = resultados.map(([key, value]) => {
          return JSON.parse(value);
        });
        const itemCounts = {};
        objetosJSON.forEach(objeto => {
          itemCounts[objeto.id] = (itemCounts[objeto.id] || 0) + 1;
        });
        const totalPrice = objetosJSON.reduce((acc, objeto) => acc + objeto.price * itemCounts[objeto.id], 0);
        setObjetosJSON(objetosJSON);
        setItemCounts(itemCounts);
        setTotalPrice(totalPrice);
      } catch (error) {
        console.error('Error al obtener todos los elementos:', error);
      }
    };
    obtenerTodosLosElementos();
  }, [isFocused]);

  const incrementarCantidad = (id) => {
    const updatedCounts = { ...itemCounts };
    updatedCounts[id] = (updatedCounts[id] || 0) + 1;
    const updatedItems = [...objetosJSON];
    const totalPrice = updatedItems.reduce((acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0), 0);
    setObjetosJSON(updatedItems);
    setItemCounts(updatedCounts);
    setTotalPrice(totalPrice);
  };

  const decrementarCantidad = (id) => {
    const updatedCounts = { ...itemCounts };
    if (updatedCounts[id] === 1) {
      delete updatedCounts[id];
      const updatedItems = objetosJSON.filter(objeto => objeto.id !== id);
      const totalPrice = updatedItems.reduce((acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0), 0);
      setObjetosJSON(updatedItems);
      setItemCounts(updatedCounts);
      setTotalPrice(totalPrice);
    } else if (updatedCounts[id] > 1) {
      updatedCounts[id] -= 1;
      const updatedItems = [...objetosJSON];
      const totalPrice = updatedItems.reduce((acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0), 0);
      setObjetosJSON(updatedItems);
      setItemCounts(updatedCounts);
      setTotalPrice(totalPrice);
    }
  };

  const eliminarObjeto = async (id, price) => {
    try {
      const updatedItems = objetosJSON.filter(objeto => objeto.id !== id);
      const updatedCounts = { ...itemCounts };
      delete updatedCounts[id];
      const totalPrice = updatedItems.reduce((acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0), 0);
      setObjetosJSON(updatedItems);
      setItemCounts(updatedCounts);
      setTotalPrice(totalPrice);
      await AsyncStorage.removeItem(id.toString());
      console.log('Objeto eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el objeto:', error);
    }
  };

  const eliminarCarrito = async () => {
    try {
      if (objetosJSON.length > 0) {
        await AsyncStorage.clear();
        setObjetosJSON([]);
        setItemCounts({});
        setTotalPrice(0);
        console.log('Carrito eliminado exitosamente');
      } else {
        console.log('El carrito ya está vacío');
      }
    } catch (error) {
      console.error('Error al eliminar el carrito:', error);
    }
  };

  const pagarCarrito = () => {
    // Lógica para procesar el pago del carrito
    console.log('Procesando el pago del carrito...');
  };

  const CartCard = ({ objeto }) => {
    const count = itemCounts[objeto.id] || 0;
  
    return (
      <View style={styles.cartContainer}>
        <View style={styles.cartCard}>
          <Image source={objeto.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{objeto.name}</Text>
            <Text style={styles.ingredients}>{objeto.ingredients}</Text>
            <Text style={styles.price}>${objeto.price}</Text>
            <Button title="Eliminar" color="red" onPress={() => eliminarObjeto(objeto.id, objeto.price)} />
          </View>
          <View style={styles.quantityContainer}>
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity onPress={() => incrementarCantidad(objeto.id)}>
                <AntDesign name="pluscircleo" size={25} color={'black'} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{count}</Text>
              <TouchableOpacity onPress={() => decrementarCantidad(objeto.id)}>
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
      <View style={styles.container} >
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={objetosJSON}
          renderItem={({ item }) => <CartCard objeto={item} />}
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                  borderWidth: 1, borderColor: 'gray', borderRadius: 10, padding: 10, marginVertical: 15 
                }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Precio Total</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
                <TouchableOpacity
                  style={{ backgroundColor: 'red', padding: 10, borderRadius: 10, alignItems: 'center' }}
                  onPress={eliminarCarrito}>
                  <Text style={{ color: 'white', fontSize: 18 }}>Eliminar Carrito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, alignItems: 'center' }}
                  onPress={pagarCarrito}>
                  <Text style={{ color: 'white', fontSize: 18 }}>Pagar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Trolley;
