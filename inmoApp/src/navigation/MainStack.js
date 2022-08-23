import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen
                name="Detail"
                component={Detail}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
