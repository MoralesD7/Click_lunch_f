
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const styles = StyleSheet.create({
    Cont_p: {
        flex:1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    txt_b: {
        fontFamily: 'Poppins-Regular',
        fontSize: 28,
    },
    txt_b__2: {
        marginTop: 5,
        fontSize: 22,
        color: 'gray',
    },
    Buscador_c: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingHorizontal: 25,
        marginHorizontal: 20,
        marginTop: 20,
        height: 50,
        width: '90%',
        backgroundColor: '#F1F2F3',
        shadowColor: '#E6E7E9',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    Icon_busqueda: {
        marginRight: 10,
    },
    Busqueda_entrada: {
        flex: 1,
        fontSize: 16,
    },
      txt_inicio: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 5,
        textDecorationLine: 'underline',
        borderBottomWidth: 1,
        borderBottomColor: '#EF6106',
      },
    C_categorias: {
        width:'%100',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 5,
        marginBottom:0
    },
    categoryBtn: {
        height: 40,
        width: '%70',
        marginRight: 7,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 200, // Modificado el valor de altura
        width: cardWidth,
        marginHorizontal: 7,
        marginBottom: 20,
        marginTop: 30,
        borderRadius: 30,
        elevation: 13,
        borderColor: '#F9813A',
        borderWidth: 2,
    },
    foodName: {
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'Abel-Regular',
        textAlign: 'center', // Añadido el estilo de texto centrado
    },
    foodPrice: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center', // Añadido el estilo de texto centrado
    },
    addToCartBtn: {
        backgroundColor: '#F9813A',
        borderRadius: 20,
        padding: 7,
        marginBottom:10
      },
      titleText: {
        fontFamily: 'MochiyPopOne-Regular',
        color:"#FE3A2E",
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5,
      },
});

export default styles;
