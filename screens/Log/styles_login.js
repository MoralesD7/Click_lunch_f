import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F1',
  },
  iconContainer: {
    marginBottom: '1%',
  },
  titleText:{
    color:"#EF6106",
    fontFamily: 'Abel-Regular',
    marginTop: windowHeight * 0.1,
    fontSize: windowWidth * 0.08,
    textAlign: 'center',
    marginVertical: 1,
  },
  loginIcon: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.08,
    borderColor: 'white',
  },
  sectionTitleText: {
    color:"#FF6100",
    fontFamily: 'MochiyPopOne-Regular',
    fontSize: windowWidth * 0.08,
    textAlign: 'center',
    marginVertical: windowHeight * 0.02,
  },
  formsContainer: {
    alignItems:'center',
    justifyContent:'center',
    margin: windowWidth * 0.03,
    backgroundColor: '#F3F3F0',
    borderRadius: windowWidth * 0.05,
    width: '85%',
    padding: windowWidth * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputBox: {
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: windowWidth * 0.04,
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: windowWidth * 0.08,
    marginVertical: windowWidth * 0.03,
    flexDirection: 'row'
  },
  inputIcon: {
    marginRight: windowWidth * 0.05,
    color: "#EF6106"
  },
  inputText: {
    paddingHorizontal: windowWidth * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  loginButtonContainer: {
    alignItems: 'center',
    marginTop: windowHeight * 0.015, // Ajustamos el margen vertical
  },
  loginButtonBox: {
    backgroundColor: '#EF6106',
    borderRadius: windowWidth * 0.08,
    paddingVertical: windowWidth * 0.05,
    width: windowWidth * 0.35,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'MochiyPopOne-Regular',
  },
  registerButtonContainer: {
    alignItems: 'center',
    marginTop: windowHeight * 0.01,
    marginVertical: windowHeight * .01 // Reducimos la distancia aquí
  },

  registerButtonBox: {
    paddingVertical: windowWidth * 0.001,
    width: windowWidth * 0.28,
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  registerButtonText: {
    width: '200%',
    fontFamily: 'Poppins-Regular',
    fontSize: windowWidth * 0.030,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
