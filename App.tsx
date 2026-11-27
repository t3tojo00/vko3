import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomePage from './Screens/Homescreen';
import { Screen2 } from './Screens/SecondScreen';
import {AppB} from './components/AppBar';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <AppB {...props} />,
          }}>
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
        <Stack.Screen name="SecondScreen" component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
