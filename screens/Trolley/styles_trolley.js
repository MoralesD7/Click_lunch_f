import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ingredients: {
    fontSize: 13,
    color: 'grey',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  quantityContainer: {
    marginRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between', // Alinea los botones de incrementar y decrementar
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    marginHorizontal: 5, // Añade un margen horizontal para separar la cantidad del botón de eliminar
  },
  actionBtnContainer: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  deleteButton: {
    marginLeft: 'auto',
    marginHorizontal:10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    height:'45%'
  },
  modalContent: {
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalInnerContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#32CD32',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
