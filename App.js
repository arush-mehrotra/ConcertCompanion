import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './pages/LoginScreen';
import CreateAccountScreen from './pages/CreateAccountScreen';
import CombinedProfileScreen from './pages/CombinedProfileScreen';
import ChatPage from './pages/ChatPage';
import MessagePage from './pages/MessagePage';
import OptionsPage from './pages/OptionsPage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="CombinedProfileScreen" component={CombinedProfileScreen} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="MessagePage" component={MessagePage} />
        <Stack.Screen name="OptionsPage" component={OptionsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
