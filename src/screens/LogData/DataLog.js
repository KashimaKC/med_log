import React, { useState, useEffect } from "react";
import API from "../../scripts/API";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import { cardStyles, entryStlyes } from "../../styles/styles";

const DataLog = ({ navigation }) => {

    const [dateData, setDateData] = useState('')
    const [noteData, setNoteData] = useState('');
    const [painData, setPainData] = useState(1);

    useEffect(() => {
        setDateData(getDate());
    });

    const logPainToState = (num) => {
        setPainData(num);
    }

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        
        //this.setState({dateToLog: today});
        return today;
    }

    const exitSubmit = () => {
        setDateData('');
        setNoteData('');
        setPainData(1);

        navigation.navigate('MedLog');
    }

    //passes in the data entered on the page and redirects to the home page.
    const submitData = (dateData, noteData, painData) => {
        API.postData(dateData, noteData, painData);
        navigation.navigate('MedLog')
    }

    return(
        <View>
            <View style={[cardStyles.cardContainer, entryStlyes.dataEntryContainer]}>
                <Text style={cardStyles.cardText}>New Entry Log: </Text>

                <View>
                    <Text style={cardStyles.cardText}>{getDate()}</Text>
                </View>

                <Text style={cardStyles.cardText}>Pain Rating: </Text>
                <View style={entryStlyes.painContainer}>
                    <TouchableHighlight onPress={() => logPainToState(1)} >
                        <View style={entryStlyes.painSelector(1)}>
                            <Text style={entryStlyes.centerText}>1</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => logPainToState(2)}>
                        <View style={entryStlyes.painSelector(2)}>
                            <Text style={entryStlyes.centerText}>2</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => logPainToState(3)}>
                        <View style={entryStlyes.painSelector(3)}>
                            <Text style={entryStlyes.centerText}>3</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => logPainToState(4)}>
                        <View style={entryStlyes.painSelector(4)}>
                            <Text style={entryStlyes.centerText}>4</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => logPainToState(5)}>
                        <View style={entryStlyes.painSelector(5)}>
                            <Text style={entryStlyes.centerText}>5</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View>
                    <Text style={cardStyles.cardText}>Notes: </Text>
                    <TextInput 
                        multiline={true}
                        style={entryStlyes.textInput}
                        onChangeText={text => setNoteData(`${text}`)}
                        value={noteData}
                    />
                </View>
                
                <View style={entryStlyes.submitButtonContainer}>
                    <TouchableHighlight 
                        style={entryStlyes.submitButton('cancel')}    
                        onPress={() => exitSubmit()}
                    >
                        <Text style={entryStlyes.centerText}>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={entryStlyes.submitButton('')}
                        onPress={() => submitData(dateData, noteData, painData)}    
                    >
                        <Text style={entryStlyes.centerText}>Submit</Text>
                    </TouchableHighlight>
                </View>

            </View>
            
            <View style={[cardStyles.cardContainer, entryStlyes.dataEntryContainer]}>
                <Text style={cardStyles.cardText}>Summary: {noteData}</Text>
                <Text style={cardStyles.cardText}>Date: {dateData}</Text>
                <Text style={cardStyles.cardText}>Pain Rating: {painData}</Text>
            </View>
        </View>
        
    )
}

export default DataLog;