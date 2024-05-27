import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    paddingVertical: height * 0.025, // 2.5% of screen height
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05, // 5% of screen width
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.35, // 35% of screen height
    marginBottom: height * 0.0375, // 3.75% of screen height
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2, // fixed shadow height
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  imageBorder: {
    borderWidth: width * 0.0125, // 1.25% of screen width
    borderColor: '#FAB97B',
    borderRadius: width * 0.0625, // 6.25% of screen width
    overflow: 'hidden',
    padding: width * 0.075, // 7.5% of screen width
  },
  image: {
    height: height * 0.25, // 25% of screen height
    width: height * 0.25, // 25% of screen height to keep it square
    resizeMode: 'cover',
    borderRadius: width * 0.025, // 2.5% of screen width
  },
  details: {
    backgroundColor: '#F9813A',
    borderTopRightRadius: width * 0.1, // 10% of screen width
    borderTopLeftRadius: width * 0.1, // 10% of screen width
    paddingBottom: height * 0.2, // 20% of screen height (increased to cover the whole screen)
    flex: 1,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, // 5% of screen width
    marginTop: height * 0.025, // 2.5% of screen height
    marginBottom: height * 0.0375, // 3.75% of screen height
  },
  iconContainer: {
    backgroundColor: 'white',
    height: width * 0.125, // 12.5% of screen width
    width: width * 0.125, // 12.5% of screen width to keep it square
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.0625, // 6.25% of screen width
  },
  detailsTitle: {
    fontSize: width * 0.0625, // 6.25% of screen width
    fontWeight: 'bold',
    color: 'white',
  },
  detailsInfo: {
    paddingHorizontal: width * 0.05, // 5% of screen width
    marginBottom: height * 0.05, // 5% of screen height
  },
  detailsRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    paddingBottom: height * 0.0125, // 1.25% of screen height
    marginBottom: height * 0.025, // 2.5% of screen height
  },
  detailsText: {
    fontSize: width * 0.04, // 4% of screen width
    color: 'white',
  },
  addToCartBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    borderRadius: width * 0.05, // 5% of screen width
    paddingVertical: height * 0.015, // 1.5% of screen height
    paddingHorizontal: width * 0.3, // 30% of screen width to make it wide
    alignSelf: 'center',
    marginTop: height * 0.02, // 2% of screen height to give some spacing from the price
    elevation: 10,
  },
  addToCartText: {
    color: 'white',
    fontSize: width * 0.04, // 4% of screen width
    fontWeight: 'bold',
    textAlign: 'center', // Ensure the text is centered
  },
  favoriteBtn: {
    bottom: height * 0.025, // 2.5% of screen height
    right: width * 0.25, // 25% of screen width
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.125, // 12.5% of screen width
    height: width * 0.125, // 12.5% of screen width to keep it square
  },
});

export default styles;
