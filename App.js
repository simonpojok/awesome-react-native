import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ColorPalette from "./screens/ColorPalette";
import Home from "./screens/Home";
import ColorPaletteModal from "./screens/ColorPaletteModal";

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => {
    return (
        <MainStack.Navigator>
            <RootStack.Screen name="Home" component={Home}/>
            <RootStack.Screen name="ColorPalette" component={ColorPalette} options={({route}) => ({
                title: route.params.paletteName
            })}/>
        </MainStack.Navigator>
    );
}
const App = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen name="Main"
                                  component={MainStackScreen}
                                  options={{headerShown: false}}/>
                <RootStack.Screen name="ColorPaletteModal"
                                  component={ColorPaletteModal}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
export default App
