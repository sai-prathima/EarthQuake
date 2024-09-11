
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EarthQuakeListing from './EarthQuakeListing';
import EarthQuakeDetils from './EarthQuakeDetails';
const Stack=createStackNavigator();
const NavigationFunc=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="EarthquakeListing" component={EarthQuakeListing} />
                <Stack.Screen name="EarthquakeDetails" component={EarthQuakeDetils} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationFunc;
//TODO rename file and rename screen names ,rename component files--done
