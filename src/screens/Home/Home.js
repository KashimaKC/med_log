import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import DataList from "../../components/DataList"
import { styles } from "../../styles/styles";

const Home = ({ navigation }) => {

    return(
        <View>
            <View style={styles.homeContainer}>

                <TouchableHighlight onPress={() => navigation.navigate('DataLog')}>
                    <Text>Log Event</Text>
                </TouchableHighlight>

                <DataList />
                
            </View>
        </View>
    )
}

export default Home;