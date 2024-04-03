import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Cont_P: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txt_registro: {
    fontFamily: 'Poppins-Regular',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 15,
  },
  Cont_forms: {
    marginHorizontal: 10,
    backgroundColor: 'white',
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
  cajatexto_usuario: {
    paddingVertical: 15,
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: 30,
    marginVertical: 10, 
    flexDirection: 'row'
  },
  icon_user: {
    marginRight: 10,
    color: "#EF6106"
  },
  cajatexto_mail: {
    paddingVertical: 15,
    backgroundColor: '#cccccc50',
    fontFamily: 'MochiyPopOne-Regular',
    borderRadius: 30,
    marginVertical: 10, 
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
    marginVertical: 10, 
    flexDirection: 'row'
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
  P_boton_registrar: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 35,
  },
  cajaboton_registrar: {
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
  P_boton_iniciar_sesion: {
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 20
  },

  cajaboton_iniciar_sesion: {
    paddingVertical: 15,
    width: 120,
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  txt_iniciar: {
    width: 150,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default styles;
