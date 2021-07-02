import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodForm from './src/foodForm';
import FoodList from './src/foodList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="FoodForm"
        component={FoodForm}
        options={{
          title: 'Home',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'orangered'
          }
        }}
      />
      <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{
          title: 'Food List',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'orangered'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>