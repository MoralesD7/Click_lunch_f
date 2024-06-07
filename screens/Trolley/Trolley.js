import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { GestureHandlerRootView, FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../Trolley/styles_trolley";
import * as Animatable from "react-native-animatable";

const Trolley = () => {
  const [objetosJSON, setObjetosJSON] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCounts, setItemCounts] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const obtenerTodosLosElementos = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const results = await AsyncStorage.multiGet(keys);
        const objetosJSON = results.map(([key, value]) => JSON.parse(value)).filter(item => item && item.id);
        const itemCounts = {};
        objetosJSON.forEach((objeto) => {
          itemCounts[objeto.id] = (itemCounts[objeto.id] || 0) + 1;
        });
        const totalPrice = objetosJSON.reduce(
          (acc, objeto) => acc + objeto.price * itemCounts[objeto.id],
          0
        );
        setObjetosJSON(objetosJSON);
        setItemCounts(itemCounts);
        setTotalPrice(totalPrice);
      } catch (error) {
        console.error("Error al obtener todos los elementos:", error);
      }
    };
    if (isFocused) {
      obtenerTodosLosElementos();
    }
  }, [isFocused]);

  const incrementarCantidad = (id) => {
    const updatedCounts = { ...itemCounts };
    updatedCounts[id] = (updatedCounts[id] || 0) + 1;
    const updatedItems = [...objetosJSON];
    const totalPrice = updatedItems.reduce(
      (acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0),
      0
    );
    setObjetosJSON(updatedItems);
    setItemCounts(updatedCounts);
    setTotalPrice(totalPrice);
  };

  const decrementarCantidad = (id) => {
    const updatedCounts = { ...itemCounts };
  
    if (updatedCounts[id] === 1) {
      delete updatedCounts[id];
      const updatedItems = objetosJSON.filter((objeto) => objeto.id !== id);
      const totalPrice = updatedItems.reduce(
        (acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0),
        0
      );
      setObjetosJSON(updatedItems);
      setItemCounts(updatedCounts);
      setTotalPrice(totalPrice);
    } else if (updatedCounts[id] > 1) {
      updatedCounts[id] -= 1;
      const totalPrice = objetosJSON.reduce(
        (acc, obj) => acc + obj.price * (updatedCounts[obj.id] || 0),
        0
      );
      setItemCounts(updatedCounts);
      setTotalPrice(totalPrice);
    }
  };
  

  const eliminarCarrito = async () => {
    try {
      if (objetosJSON.length > 0) {
        await AsyncStorage.clear();
        setObjetosJSON([]);
        setItemCounts({});
        setTotalPrice(0);
        console.log("Carrito eliminado exitosamente");
      } else {
        console.log("El carrito ya está vacío");
      }
    } catch (error) {
      console.error("Error al eliminar el carrito:", error);
    }
  };

  const pagarCarrito = () => {
    setIsModalVisible(true);
  };

  const confirmarCompra = () => {
    const fechaCompra = new Date().toLocaleString(); // Obtener la fecha y hora de la compra
    const historialCompras = objetosJSON.map((objeto) => ({
      fecha: fechaCompra,
      monto: objeto.price * itemCounts[objeto.id],
      producto: objeto.name,
    }));
    setIsModalVisible(false);
    eliminarCarrito();
    navigation.navigate("Information", { historial: historialCompras });
  };

  const CartCard = ({ objeto }) => {
    if (!objeto) return null;
    const count = itemCounts[objeto.id] || 0;

    return (
      <Animatable.View animation="fadeIn" duration={500}>
        <View style={styles.cartContainer}>
          <View style={styles.cartCard}>
            <Image source={objeto.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{objeto.name}</Text>
              <Text style={styles.ingredients}>{objeto.ingredients}</Text>
              <Text style={styles.price}>${objeto.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <View style={styles.actionBtnContainer}>
                <TouchableOpacity onPress={() => incrementarCantidad(objeto.id)}>
                  <AntDesign name="pluscircleo" size={25} color={"black"} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{count}</Text>
                <TouchableOpacity onPress={() => decrementarCantidad(objeto.id)}>
                  <AntDesign name="minuscircleo" size={25} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animatable.View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Carrito</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={objetosJSON}
          renderItem={({ item }) => <CartCard objeto={item} />}
          keyExtractor={(item, index) => index.toString()} // Usar el índice como clave
          ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
          ListFooterComponent={() => (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 15,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 10,
                  padding: 10,
                  marginVertical: 15,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Precio Total</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>${totalPrice.toFixed(2)}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "red",
                    padding: 10,
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                  onPress={eliminarCarrito}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>Eliminar Carrito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 10,
                    alignItems: "center",
                  }}
                  onPress={pagarCarrito}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>Pagar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <Modal transparent visible={isModalVisible}>
          <Animatable.View animation="fadeIn" duration={300} style={styles.modalBackground}>
            <Animatable.View animation="bounceIn" duration={500} delay={500} style={styles.modalContainer}>
              <Animatable.View animation="zoomIn" duration={1000} delay={1000} style={styles.modalContent}>
                <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
                  <Image source={require("../../assets/images/x.png")} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <Animatable.View animation="fadeIn" duration={1000} delay={1500} style={styles.modalInnerContent}>
                  <Image source={require("../../assets/images/interrogacion.png")} style={{ height: 80, width: 80, marginVertical: 10 }} />
                  <Text style={styles.modalText}>¿Estás seguro de confirmar tu pedido?</Text>
                </Animatable.View>
                <Animatable.View animation="fadeIn" duration={1000} delay={2000} style={styles.modalButtonsContainer}>
                  <TouchableOpacity onPress={() => setIsModalVisible(false)} style={[styles.cancelButton, { marginRight: 10 }]}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={confirmarCompra} style={[styles.confirmButton, { marginLeft: 10 }]}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                  </TouchableOpacity>
                </Animatable.View>
              </Animatable.View>
            </Animatable.View>
          </Animatable.View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
};

export default Trolley;
