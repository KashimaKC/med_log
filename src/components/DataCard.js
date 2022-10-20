import React from "react";
import { Text, View } from "react-native";
import { cardStyles } from "../styles/styles";

/*
    This renders out the actual data in a "card" format. it takes in item as a parameter which is the data
    returned from the API.
*/

const DataCard = ({ item }) => {

    return(
        <View style={cardStyles.cardContainer}>
            <Text style={cardStyles.cardText}>Date: {item.date} </Text>
            <Text style={cardStyles.cardText}>Pain Rating: {item.painRating} </Text>
            <Text style={cardStyles.cardText}>Notes:  {item.notes} </Text>
        </View>
    )
}

export default DataCard;