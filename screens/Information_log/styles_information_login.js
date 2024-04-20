import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    paddingTop: 0.05 * windowWidth, // Ajustamos el espacio superior para centrar el contenido
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
    marginBottom: 0.01 * windowWidth,
  },
  image: {
    height: 0.9 * windowWidth, // Ajustamos la altura de la imagen
    width: 0.9 * windowWidth, // Ajustamos el ancho de la imagen
  },
  details: {
    backgroundColor: '#F9813A',
    borderTopRightRadius: 0.1 * windowWidth,
    borderTopLeftRadius: 0.1 * windowWidth,
    paddingVertical: 0.15 * windowWidth, // Ajustamos el espacio vertical dentro del contenedor de detalles
    paddingHorizontal: 0.05 * windowWidth,
    width: '100%', // Aseguramos que el contenedor ocupe todo el ancho
  },
  detailsHeader: {
    marginBottom: 0.07 * windowWidth, // Ajustamos el espacio entre el encabezado y el texto
  },
  detailsTitle: {
    fontSize: 0.04 * windowWidth,
    color: 'white',
    textAlign: 'center',
    fontFamily:'Poppins-Regular'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0.05 * windowWidth,
    height: .18 * windowWidth,
  },
  button: {
    backgroundColor: '#EF6106', // Cambiamos el color de fondo del botón
    paddingVertical: 0.025 * windowWidth,
    paddingHorizontal: 0.05 * windowWidth,
    borderRadius: 0.025 * windowWidth,
    width: '45%', // Ajustamos el ancho de los botones
    marginBottom: 0.025 * windowWidth, // Ajustamos el espacio entre los botones
    borderColor: 'black', // Agregamos un borde negro
    borderWidth: 1, // Ancho del borde
    alignItems: 'center', // Centramos el contenido horizontalmente
    justifyContent: 'center', // Centramos el contenido verticalmente
  },
  buttonText: {
    color: '#fff', // Cambiamos el color del texto a blanco
    fontSize: 0.05 * windowWidth,
    textAlign: 'center', // Centramos el texto horizontalmente
    fontFamily:'Abel-Regular'
  },
  leftButton: {
    marginRight: 'auto', // Alinea el botón a la izquierda
  },
  rightButton: {
    marginLeft: 'auto', // Alinea el botón a la derecha
  },
});

export default styles;
