import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  saldoContainer: {
    alignItems: 'center', // Centrar el saldo en la parte inferior
    marginBottom: 20,
  },
  historialContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  historialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Alinear el texto al centro
    borderBottomWidth: 1, // Agregar borde inferior
    borderBottomColor: '#000', // Color del borde
    paddingBottom: 5, // Ajustar el espaciado inferior
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1, // Agregar borde inferior
    borderBottomColor: '#000', // Color del borde
    borderTopWidth: 1, // Agregar borde superior
    borderTopColor: '#000', // Color del borde
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1, // Agregar borde derecho
    borderRightColor: '#000', // Color del borde
    paddingVertical: 5, // Ajustar el espaciado vertical
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1, // Agregar borde inferior
    borderBottomColor: '#000', // Color del borde
    paddingBottom: 5, // Espacio adicional en la parte inferior para separar las filas
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    borderRightWidth: 1, // Agregar borde derecho
    borderRightColor: '#000', // Color del borde
    paddingVertical: 5, // Ajustar el espaciado vertical
  },
});

export default styles;
