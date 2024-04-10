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
    marginRight: 20,
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  actionBtnContainer: {
    width:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom:25
  },
});

export default styles;
