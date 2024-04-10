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
    marginBottom: 20,
  },
  image: {
    height: 220,
    width: 220,
  },
  details: {
    backgroundColor: '#F9813A',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingBottom: 100, // Ajuste del espacio para el botón
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
    marginBottom: 40, // Ajuste de espacio entre precio y botón
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
    flexDirection:'row',
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
    alignItems:'center',
    width: 50,
    height: 50,
  },
});

export default styles;
