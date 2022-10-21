import React, { useState } from "react";
import API from "../scripts/API";
import { Text, View, TouchableHighlight } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { cardStyles } from "../styles/styles";

/*
    This renders out the actual data in a "card" format. it takes in item as a parameter which is the data
    returned from the API.
*/

const DataCard = ({ item }) => {

    const deleteEntry = (key) => {

        API.removeData(key);
    }

    return(
        <View style={cardStyles.cardContainer('row')}>
            <View style={cardStyles.cardInfo}>
                <Text style={cardStyles.cardText}>Date: {item.date} </Text>
                <Text style={cardStyles.cardText}>Pain Rating: {item.painRating} </Text>
                <Text style={cardStyles.cardText}>Notes:  {item.notes} </Text>
            </View>

            <View style={cardStyles.cardButtons}>
                <TouchableHighlight 
                    style={cardStyles.buttonContainer('red')}
                    onPress={() => deleteEntry(item.id)}
                >
                    <Ionicons name='close-sharp' style={cardStyles.buttonContent} />
                </TouchableHighlight>

                <TouchableHighlight style={cardStyles.buttonContainer('teal')}>
                    <Ionicons name='ellipsis-horizontal-sharp' style={cardStyles.buttonContent} />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default DataCard;