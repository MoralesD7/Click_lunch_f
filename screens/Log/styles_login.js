import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  Cont_P: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  IconContainer: {
    marginBottom: 20,
  },
  Icon_login: {
    width: 150,
    height: 150,
    borderRadius: 25,
    borderColor: 'white',
  },
  txt_inicio: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  Cont_forms: {
    margin: 10,
    backgroundColor: 'white',
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
  cajatexto_mail: {
    paddingVertical: 15,
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: 30,
    marginVertical: 15,
    flexDirection: 'row'
  },
  icon_mail: {
    marginRight: 10,
    color: "#EF6106"
  },
  cajatexto_password: {
    paddingVertical: 15,
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: 30,
    marginVertical: 15,
    flexDirection: 'row',
  },
  icon_lock: {
    marginRight: 10,
    color: "#EF6106"
  },
  inputText: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  P_boton_iniciar_seción: {
    alignItems: 'center',
    marginTop: 20,
  },
  cajaboton_iniciar_seción: {
    backgroundColor: '#EF6106',
    borderRadius: 30,
    paddingVertical: 15,
    width: 150,
  },
  txtboton: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'MochiyPopOne-Regular',
  },
  P_boton_registrar: {
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 20
  },

  cajaboton_registrar: {
    paddingVertical: 15,
    width: 120,
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  txt_registrar: {
    width: 150,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;