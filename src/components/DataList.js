import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Item } from "react-native";
import API from "../scripts/API";
import DataCard from "./DataCard";
import { styles, listStyles } from "../styles/styles";

const DataList = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            setData(await API.getListData());
        }

        getData();
    }, []);

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