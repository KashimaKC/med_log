import React, { Component } from "react";
import { Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home.js"
import DataLog from "../screens/LogData/DataLog.js";

const NavStack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>

            <NavStack.Navigator>

                <NavStack.Screen 
                    name="MedLog" 
                    component={Home}
                    options={{
                        headerTitle: "MedLog",
                        headerRight : () => (
                            <Button title="Settings" color='black'/>
                        )
                    }}    
                />
                <NavStack.Screen name="DataLog" component={DataLog}/>
                
            </NavStack.Navigator>

        </NavigationContainer>
    )
}

export default App;