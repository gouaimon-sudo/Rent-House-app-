import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './App';
import Inscription from './Inscription';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={App} />
        <Stack.Screen name="Inscription" component={Inscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}