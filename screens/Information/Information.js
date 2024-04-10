import React from 'react';
import { View, Text } from 'react-native';
import styles from "../Information/styles_information";

export default function Information({ saldo, historial }) {
  return (
    <View style={styles.container}>
      <View style={styles.saldoContainer}>
        <Text style={styles.title}>Saldo Actual: {saldo}</Text>
      </View>
      <View style={styles.historialContainer}>
        <Text style={styles.historialTitle}>Historial de Compras</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Fecha de Compra</Text>
          <Text style={styles.columnHeader}>Monto</Text>
          <Text style={styles.columnHeader}>Nombre del Producto</Text>
        </View>
        {historial && historial.map((compra, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{compra.fecha}</Text>
            <Text style={styles.cell}>{compra.monto}</Text>
            <Text style={styles.cell}>{compra.producto}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
