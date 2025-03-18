import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {


    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Accueil">
                <Stack.Screen name="Accueil" component={HomeScreen} />
                <Stack.Screen name="Liste" component={List} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;
