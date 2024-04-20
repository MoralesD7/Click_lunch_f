import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Home/styles_details';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import foods from '../../consts/foods';

const Details = ({ navigation, route }) => {
  const item = route.params;
  const foodDetails = foods.find(food => food.id === item.id);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.imageContainer}>
            <View style={styles.imageBorder}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
          <View style={styles.details}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailsTitle}>{item.name}</Text>
              <TouchableOpacity onPress={() => {/* Lógica para manejar el favorito */ }}>
                <View style={styles.iconContainer}>
                  <AntDesign name="hearto" size={28} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.detailsInfo}>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Descripción: {foodDetails.description}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Tiempo de preparación: {foodDetails.preparationTime}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsText}>Precio: ${foodDetails.price}</Text>
                <TouchableOpacity
                  style={styles.addToCartBtn}
                  onPress={() => {/* Lógica para agregar al carrito */ }}
                >
                  <AntDesign name="plus" size={20} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default Details;