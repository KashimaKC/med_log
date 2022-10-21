import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableWithoutFeedback, SafeAreaView} from "react-native";
import API from "../scripts/API";
import DataCard from "./DataCard";
import { styles, listStyles } from "../styles/styles";

/* 
    This is the component for the data list. It renders the flatlist with the data recieved
    from the API.
*/

const DataList = (reduce) => {

    const [data, setData] = useState();

    //onload get api information
    useEffect(() => {
        const getData = async () => {
            setData(await API.getListData());
        }

        getData();
    }, [reduce]);

    return (
            <View style={listStyles.listContainer}>
            <FlatList
                data={data}
                renderItem={DataCard}
                keyExtractor={item => item.id}
            />
            </View>
    )
}

export default DataList;