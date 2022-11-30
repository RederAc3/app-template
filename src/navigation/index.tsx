import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => (
    <Stack.Navigator>
        <Stack.Screen name="Images" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
)

const Navigation: React.FC = () => (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
);

export default Navigation;