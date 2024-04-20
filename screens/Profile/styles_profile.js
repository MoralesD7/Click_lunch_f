import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 50,
    },
    headerContainer: {
        marginBottom: 70,
    },
    headerText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 10,
        textDecorationLine: 'underline',
        borderBottomWidth: 2,
        borderBottomColor: '#EF6106',
    },
    formsContainer: {
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
    inputBox: {
        paddingVertical: 15,
        backgroundColor: '#cccccc50',
        fontFamily: 'MochiyPopOne-Regular',
        borderRadius: 30,
        marginVertical: 10, 
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
    logoutButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    logoutButtonBox: {
        backgroundColor: '#EF6106',
        borderRadius: 30,
        paddingVertical: 15,
        width: 150,
    },
    logoutButtonText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'MochiyPopOne-Regular',
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '70%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});

export default styles;