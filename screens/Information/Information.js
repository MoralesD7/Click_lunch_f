import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "../Information/styles_information";
import { useRoute, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function Information() {
  const route = useRoute();
  const navigation = useNavigation();
  // Verificar si historial está definido en route.params
  const historial = route.params?.historial || [];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Historial</Text>
        </View>
      <View style={styles.container}>
        <View style={styles.saldoContainer}>
          <Text style={styles.title}>Saldo Actual: </Text>
        </View>
        <View style={styles.historialContainer}>
          <Text style={styles.historialTitle}>Historial de Compras</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.columnHeader}>Fecha de Compra</Text>
            <Text style={styles.columnHeader}>Monto</Text>
            <Text style={styles.columnHeader}>Nombre del Producto</Text>
          </View>
          {historial.map((compra, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{compra.fecha}</Text>
              <Text style={styles.cell}>{compra.monto}</Text>
              <Text style={styles.cell}>{compra.producto}</Text>
            </View>
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
