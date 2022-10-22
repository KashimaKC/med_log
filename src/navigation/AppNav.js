import React, { Component } from "react";
import { Text, Button, View, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../screens/Home/Home.js"
import DataLog from "../screens/LogData/DataLog.js";
import Settings from "../screens/Settings/Settings.js";
import DataDisplay from "../screens/DataDisplay/DataDisplay.js"

/* 
    this handles all the of home navigation.
*/

const NavStack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>

            <NavStack.Navigator>

                <NavStack.Screen 
                    name="MedLog" 
                    component={Home}
                    options={({navigation}) => ({
                        headerTitle: "MedLog",
                        headerRight : () => (
                            <View>
                                <TouchableHighlight onPress={() => navigation.navigate('Settings')}>
                                    <Ionicons name="settings-sharp" style={{
                                        fontSize: 25
                                    }}/>
                                </TouchableHighlight>
                            </View>
                            
                        )
                    })}    
                />
                <NavStack.Screen name="DataLog" component={DataLog}/>
                <NavStack.Screen name="Settings" component={Settings} />
                <NavStack.Screen name="DataDisplay" component={DataDisplay} />
                
            </NavStack.Navigator>

        </NavigationContainer>
    )
}

export default App;