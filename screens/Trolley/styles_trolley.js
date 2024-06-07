import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ajusta el contenedor principal para ocupar toda la pantalla
  },
  header: {
    paddingVertical: height * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
  },
  cartContainer: {
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.01,
  },
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: width * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: height * 0.01,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  image: {
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: width * 0.03,
    marginRight: width * 0.04,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.005,
    color: '#333',
  },
  ingredients: {
    fontSize: width * 0.035,
    color: '#666',
    marginBottom: height * 0.005,
  },
  price: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
  },
  quantityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginHorizontal: width * 0.03,
    color: '#333',
  },
  actionBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  deleteButton: {
    marginLeft: 'auto',
    paddingHorizontal: width * 0.03,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderRadius: width * 0.03,
    width: '90%',
    height: '45%',
  },
  modalContent: {
    padding: width * 0.05,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalInnerContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginBottom: height * 0.02,
    color: '#333',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.03,
  },
  confirmButton: {
    backgroundColor: '#32CD32',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.03,
  },
  buttonText: {
    color: '#FFF',
    fontSize: width * 0.04,
    textAlign: 'center',
  },
});

export default styles;
