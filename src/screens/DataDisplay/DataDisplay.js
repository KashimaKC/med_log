import { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartStyles } from "../../styles/styles";
import API from "../../scripts/API";

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

    const [chartData, setChartData] = useState();
    const [labelData, setLabelData] = useState();  

    const { APIData } = route.params;
    const chartPoints = Number(APIData[0].painRating);
    const test = [1, 2, 3]

    useEffect(() => {
        //extractDataPoints(4);
    }, []);

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
            />
            <Text>
                {JSON.stringify(APIData, null, 4)}
            </Text>
        </View>
    )
}

export default DataDisplay;