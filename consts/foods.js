const foods = [
  {
    id: '1',
    name: 'Pizza de Carne',
    description: 'Mozzarella, salsa de tomate, carne molida, champiñones, pimientos',
    price: '8.30',
    preparationTime: '25 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/meatPizza.png'),
  },
  {
    id: '2',
    name: 'Pizza de Queso',
    description: 'Mozzarella, salsa de tomate, queso cheddar, queso parmesano, albahaca',
    price: '7.10',
    preparationTime: '20 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/cheesePizza.png'),
  },
  {
    id: '3',
    name: 'Hamburguesa de Pollo',
    description: 'Pechuga de pollo, pan de hamburguesa, lechuga, tomate, mayonesa',
    price: '5.10',
    preparationTime: '15 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/chickenBurger.png'),
  },
  {
    id: '4',
    name: 'Sushi de Salmón',
    description: 'Arroz, salmón fresco, alga nori, aguacate, pepino',
    price: '9.55',
    preparationTime: '30 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/sushiMakizushi.png'),
  },
  {
    id: '5',
    name: 'Tacos de Carnitas',
    description: 'Carne de cerdo, tortillas de maíz, cebolla, cilantro, limón',
    price: '10.50',
    preparationTime: '20 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/tacos_carnitas.png'),
  },
  {
    id: '6',
    name: 'Ensalada César',
    description: 'Lechuga romana, pollo a la parrilla, crutones, queso parmesano, aderezo César',
    price: '7.80',
    preparationTime: '10 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/ensalada_cesar.png'),
  },
  {
    id: '7',
    name: 'Pasta Alfredo',
    description: 'Fettuccine, crema, mantequilla, ajo, queso parmesano rallado',
    price: '11.20',
    preparationTime: '25 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/pasta_alfredo.png'),
  },
  {
    id: '8',
    name: 'Parrillada Mixta',
    description: 'Carne de res, pollo, chorizo, vegetales asados, chimichurri',
    price: '13.75',
    preparationTime: '40 minutos', // Tiempo de preparación agregado
    image: require('../assets/images/parrillada_mixta.png'),
  },
  {
    id: '9',
    category: 'Bebidas',
    name: 'Coca-Cola',
    description: 'Refresco de cola',
    price: '2.50',
    preparationTime: '0 minutos', // No requiere preparación
    image: require('../assets/images/cocaCola.png'),
  },
  {
    id: '10',
    category: 'Bebidas',
    name: 'Jugo de Naranja',
    description: 'Jugo natural de naranja',
    price: '3.00',
    preparationTime: '0 minutos',
    image: require('../assets/images/orangeJuice.png'),
  },
  {
    id: '11',
    category: 'Refrescos',
    name: 'Sprite',
    description: 'Refresco de lima-limón',
    price: '2.50',
    preparationTime: '0 minutos',
    image: require('../assets/images/sprite.png'),
  },
  {
    id: '12',
    category: 'Refrescos',
    name: 'Fanta',
    description: 'Refresco de naranja',
    price: '2.50',
    preparationTime: '0 minutos',
    image: require('../assets/images/fanta.png'),
  },
];

export default foods;
