import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const FavoriteStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'transparent',
    elevation: 3,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333', // Aseguramos que el color sea visible en el degradado
    fontFamily: 'Poppins-Regular',
  },
  flatListContainer: {
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.02,
  },
  cartContainer: {
    marginBottom: height * 0.02,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#FDF3E7',
  },
  innerContainer:{flex:1},
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.04,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: width * 0.03,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
  },
  ingredients: {
    fontSize: width * 0.035,
    color: '#666',
    marginTop: height * 0.005,
  },
  price: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginTop: height * 0.01,
    color: 'black',
  },
  deleteIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: width * 0.025,
  },
});

export default FavoriteStyles;
