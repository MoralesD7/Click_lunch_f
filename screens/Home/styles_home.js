import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const styles = StyleSheet.create({
    Cont_p: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingTop: 15,
    },
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    contenedor_txt1: {
        flexDirection: 'row',
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
        paddingHorizontal: 15,
        marginHorizontal: 10,
        marginTop: 20,
        height: 50, // Altura ajustada
        width: '95%',
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
    C_categorias: {
        paddingVertical: 15,
        alignItems: 'center',
        paddingHorizontal: 5,
        marginBottom: 20, // Ajusta el margen inferior del ListCategories
    },
    categoryBtn: {
        height: 40,
        width: 117,
        marginRight: 7,
        borderRadius: 30,
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
    cardContainer: {
        marginTop: 20, // Ajusta el margen superior del contenedor del Card
    },
    card: {
        height: 240,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: '30%',
        borderRadius: 15,
        elevation: 13,
        backgroundColor: 'white',
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#F9813A',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
