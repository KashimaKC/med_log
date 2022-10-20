import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { cardStyles, entryStlyes } from "../../styles/styles";

const DataLog = ({ navigation }) => {

    return(
        <View style={[cardStyles.cardContainer, entryStlyes.dataEntryContainer]}>
            <Text style={cardStyles.cardText}> New Entry Log: </Text>
            <View>

            </View>
        </View>
    )
}

export default DataLog;