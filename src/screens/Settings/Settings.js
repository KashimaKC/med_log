import React from "react";
import { View, Text } from "react-native";

const Settings = ({ navigation }) => {

    return(
        <View>
            <View>
                <Text>Version: 0.0.1</Text>
                <Text>Author: Joshua Maraun</Text>
                <Text>GitHub: KashimaKC</Text>
                <View>
                    <Text>TODO: </Text>
                    <Text>User needs to hit the refresh button after deleting an entry in the list.</Text>
                </View>
            </View>
        </View>
    )
}

export default Settings;