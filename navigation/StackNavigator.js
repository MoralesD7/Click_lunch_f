import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

// importaciones de pantallas 
import Home from '../screens/Home/Home';
import Login from '../screens/Log/Login';
import Register from '../screens/Registration/Register';
import Profile from '../screens/Profile/Profile';
import Trolley from '../screens/Trolley/Trolley';
import Favorite from '../screens/Favorite/Favorite';
import Details from '../screens/Home/Details';
import Information from '../screens/Information/Information';
import Information_login from '../screens/Information_log/information_login';

//hooks para la nav 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//contenedor de la nav por stack 
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Information_login" component={Information_login} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//contenedor para la nav de la barra
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: '#EF6106',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animatable.View 
              animation={focused ? 'pulse' : null} // Animación de resaltado al seleccionar
              easing="ease-out" // Tipo de transición
              iterationCount="infinite" // Número de veces que se repite la animación (en este caso, infinito)
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }} // Escalado del icono
            >
              <AntDesign name="home" size={size} color={color} />
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animatable.View 
              animation={focused ? 'pulse' : null}
              easing="ease-out"
              iterationCount="infinite"
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}
            >
              <AntDesign name="hearto" size={size} color={color} />
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={Trolley}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animatable.View 
              animation={focused ? 'pulse' : null}
              easing="ease-out"
              iterationCount="infinite"
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}
            >
              <AntDesign name="shoppingcart" size={size} color={color} />
            </Animatable.View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animatable.View 
              animation={focused ? 'pulse' : null}
              easing="ease-out"
              iterationCount="infinite"
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}
            >
              <AntDesign name="user" size={size} color={color} />
            </Animatable.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
