import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F1',
  },
  titleText: {
    fontFamily: 'Abel-Regular',
    color:"#EF6106",
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 15,
  },
  formsContainer: {
    marginHorizontal: '10%',
    backgroundColor: '#F3F3F0',
    borderRadius: 20,
    width: '85%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputBox: {
    paddingVertical: '5%',
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: 30,
    marginVertical: '5%', 
    flexDirection: 'row'
  },
  inputIcon: {
    marginRight: 10,
    color: "#EF6106"
  },
  inputText: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  registerButtonContainer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35,
  },
  registerButtonBox: {
    backgroundColor: '#EF6106',
    borderRadius: 30,
    paddingVertical: 15,
    width: 150,
  },
  registerButtonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'MochiyPopOne-Regular',
  },
  loginButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 20
  },
  loginButtonBox: {
    paddingVertical: 15,
    width: 120,
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginButtonText: {
    width: 150,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
