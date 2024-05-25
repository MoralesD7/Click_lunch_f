import { StyleSheet } from 'react-native';

const FavoriteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  cartContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
  },
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ingredients: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#e91e63',
  },
  deleteIcon: {
    marginLeft: 'auto',
  },
  deleteIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  deleteIconWrapper: {
    backgroundColor: '#e91e63',
    borderRadius: 20,
    padding: 8,
  },
});

export default FavoriteStyles;
