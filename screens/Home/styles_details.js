import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 280,
    marginBottom: 40, // Ajusta el margen inferior para crear más separación
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2, // Reducir la altura de la sombra
    },
    shadowOpacity: 0.3, // Reducir la opacidad de la sombra
    shadowRadius: 2, // Reducir el radio de la sombra
    elevation: 5,
  },
  imageBorder: {
    borderWidth: 5, // Ajusta el ancho del borde
    borderColor: '#FAB97B', // Cambia el color del borde
    borderRadius: 25, // Ajusta el radio del borde para esquinas redondeadas
    overflow: 'hidden',
    padding: 30, // Añade un espacio entre la imagen y el borde
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    borderRadius: 10, // Ajusta el radio de la imagen para esquinas redondeadas
  },
  details: {
    backgroundColor: '#F9813A',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: 100,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  detailsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsInfo: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  detailsRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    paddingBottom: 10,
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 16,
    color: 'white',
  },
  addToCartBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 1,
    right: 1,
    backgroundColor: '#FF6347',
    borderRadius: 30,
    width: 40,
    height: 40,
    elevation: 5,
  },
  favoriteBtn: {
    bottom: 20,
    right: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
});

export default styles;
