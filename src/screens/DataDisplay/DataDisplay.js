import { useEffect, useState } from "react";
import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartStyles } from "../../styles/styles";

const screenWidth = Dimensions.get("window").width / 1.1;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const DataDisplay = ({ route }) => {

    const { APIData, Reduce } = route.params;

    const [textData, setText] = useState('');

    useEffect(() => {
        //add text change here when it gets called so that it can be rerendered. basically just add everything that
        //gets changed since this is actually correctly being called.
        getStringData();
        console.log(APIData);
    }, [route.params]);

    const extractDataPoints = (num) => {
        let pointArray = [];

        for(let i = 0; i < num; i++) {
            pointArray.push(Number(APIData[i].painRating));
        }
        return pointArray
    }

    const extractDataLables = (num) => {
        let dataLabelArray = [];

        for(let i = 0; i < num; i++) {
            dataLabelArray.push(APIData[i].date);
        }
        return dataLabelArray
    }

    const getStringData = () => {
        let str = JSON.stringify(APIData, null, 4);

        setText(str);
        console.log(str);
    }

    const chart = {
        labels: extractDataLables(4),
        datasets: [
          {
            data: extractDataPoints(4),
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
    };

    return (
        <View style={chartStyles.chartContainer}>
            <LineChart
                data={chart}
                width={screenWidth}
                height={200}
                chartConfig={chartStyles.chartStyle}
                bezier
                fromZero
            />
            <Text>
                {textData}
            </Text>
        </View>
    )
}

export default DataDisplay;