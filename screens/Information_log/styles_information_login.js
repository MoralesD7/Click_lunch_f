import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  header: {
    paddingTop: 0.05 * windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0.05 * windowWidth,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0.01 * windowHeight, // Usamos windowHeight para ajustar el margen inferior de la imagen
  },
  image: {
    height: 0.9 * windowWidth,
    width: 0.9 * windowWidth,
  },
  details: {
    backgroundColor: '#F9813A',
    borderTopRightRadius: 0.1 * windowWidth,
    borderTopLeftRadius: 0.1 * windowWidth,
    paddingVertical: 0.15 * windowHeight, // Usamos windowHeight para ajustar el espacio vertical
    paddingHorizontal: 0.05 * windowWidth,
    width: '100%',
  },
  detailsHeader: {
    marginBottom: 0.07 * windowHeight, // Usamos windowHeight para ajustar el espacio entre el encabezado y el texto
  },
  detailsTitle: {
    fontSize: 0.04 * windowWidth,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0.05 * windowWidth,
    height: 0.18 * windowHeight, // Usamos windowHeight para ajustar la altura del contenedor de botones
  },
  button: {
    backgroundColor: '#EF6106',
    paddingVertical: 0.025 * windowHeight, // Usamos windowHeight para ajustar el padding vertical
    paddingHorizontal: 0.05 * windowWidth,
    borderRadius: 0.025 * windowWidth,
    width: '45%',
    marginBottom: 0.025 * windowHeight, // Usamos windowHeight para ajustar el espacio entre los botones
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 0.05 * windowWidth,
    textAlign: 'center',
    fontFamily: 'Abel-Regular',
  },
  leftButton: {
    marginRight: 'auto',
  },
  rightButton: {
    marginLeft: 'auto',
  },
});

export default styles;
