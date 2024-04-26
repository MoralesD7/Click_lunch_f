// ModalComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable, FlatList } from 'react-native';
import { useDataContext } from './DataContext';

const ModalComponent = () => {
  const { cart, clearCart } = useDataContext();
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClearCart = () => {
    clearCart();
    closeModal();
  };

  return (
    <View style={styles.centeredView}>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>🛒</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Carrito de Compras</Text>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text>{item.name}</Text>
                  <Pressable onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeItemText}>Eliminar</Text>
                  </Pressable>
                </View>
              )}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleClearCart}
            >
              <Text style={styles.textStyle}>Limpiar Carrito</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  removeItemText: {
    color: 'red',
  },
});

export default ModalComponent;
