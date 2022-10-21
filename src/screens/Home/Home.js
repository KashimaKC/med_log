import React, { useState, useEffect, useReducer } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DataList from "../../components/DataList"
import { styles, buttonStyles } from "../../styles/styles";

const Home = ({ navigation }) => {

    const [state, updateState] = useState(1); 

    return(

        <View style={{flex : 1}}>
            <View style={styles.homeContainer}>
                {/* this container holds the main control buttons at the top. */}
                <View style={buttonStyles.container}>

                    <TouchableHighlight onPress={() => navigation.navigate('DataLog')} style={buttonStyles.logButton('blue')}>
                        <Text style={buttonStyles.buttonContent}>Log Event</Text>
                    </TouchableHighlight>

                    {/* route this to the data display when the component gets created */}
                    <TouchableHighlight onPress={() => navigation.navigate('DataDisplay')} style={buttonStyles.logButton('teal')}>
                        <Text style={buttonStyles.buttonContent}>View Data</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => updateState(state + 1)} style={buttonStyles.logButton('blue', true)}>
                        <Ionicons name="refresh-sharp" style={buttonStyles.buttonContent}></Ionicons>
                    </TouchableHighlight>

                </View>

                <View>
                    <Text style={styles.sectionLabel}>Recent Entries:</Text>
                </View>

                <DataList reducer={state} />
                
            </View>
        </View>
    )
}

export default Home;