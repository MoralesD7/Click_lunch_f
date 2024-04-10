import { StyleSheet } from 'react-native';

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
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Abel-Regular',
    marginTop:'10%',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 1,
  },
  loginIcon: {
    width: 150,
    height: 150,
    borderRadius: 25,
    borderColor: 'white',
  },
  sectionTitleText: {
    color:"#EF6106",
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Abel-Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  formsContainer: {
    alignItems:'center',
    justifyContent:'center',
    margin: 10,
    backgroundColor: '#F3F3F0',
    borderRadius: 20,
    width: '85%',
    padding: 20,
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
    paddingVertical: 15,
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: 30,
    marginVertical: 15,
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
  loginButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonBox: {
    backgroundColor: '#EF6106',
    borderRadius: 30,
    paddingVertical: 15,
    width: 150,
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'MochiyPopOne-Regular',
  },
  registerButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 20
  },

  registerButtonBox: {
    paddingVertical: 15,
    width: 120,
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  registerButtonText: {
    alignItems:'center',
    justifyContent:'center',
    width: '170%',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
