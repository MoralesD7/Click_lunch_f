import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Home/styles_details'; // Importa los estilos desde el archivo correcto
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Details = ({ navigation, route }) => {
  const item = route.params;

  return (
    <GestureHandlerRootView>
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.header}>
          <AntDesign name="left" size={30} onPress={navigation.goBack} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.details}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailsTitle}>{item.name}</Text>
              <View style={styles.iconContainer}>
              <AntDesign name="hearto" size={28}/>
              </View>
            </View>
            <Text style={styles.detailsText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Text>
            <View style={{ marginTop: 40, marginBottom: 40 }}></View>
          </View>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};
export default Details;
