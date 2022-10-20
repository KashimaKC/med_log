import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import DataList from "../../components/DataList"
import { styles, buttonStyles } from "../../styles/styles";

const Home = ({ navigation }) => {


    return(
        <View>
            <View style={styles.homeContainer}>
                {/* this container holds the main control buttons at the top. */}
                <View style={buttonStyles.container}>

                    <TouchableHighlight onPress={() => navigation.navigate('DataLog')}>
                        <Text style={buttonStyles.logButton('blue')}>Log Event</Text>
                    </TouchableHighlight>

                    {/* route this to the data display when the component gets created */}
                    <TouchableHighlight onPress={() => navigation.navigate('DataDisplay')}>
                        <Text style={buttonStyles.logButton('teal')}>View Data</Text>
                    </TouchableHighlight>

                </View>

                <DataList />
                
            </View>
        </View>
    )
}

export default Home;