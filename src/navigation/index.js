import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


//Screens
import HomeScreen from '../screens/HomeScreen';
import ImagenPreview from '../screens/ImagenPreview';
import PlayScreen from '../screens/PlayScreen';


const BaseRootStack = createStackNavigator();

function BaseRoot () {
    return (
        <NavigationContainer>
            <BaseRootStack.Navigator initialRouteName="Home">
                <BaseRootStack.Screen name="Home" component={HomeScreen} />
                <BaseRootStack.Screen name="ImagePreview" component={ImagenPreview} />
                <BaseRootStack.Screen name="PlayVideo" component={PlayScreen} />
            </BaseRootStack.Navigator>
        </NavigationContainer>
    )
}


export default BaseRoot;
