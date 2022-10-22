import { StyleSheet } from "react-native";

let blueColor = '#46aae3';
let tealColor = '#31decf';
let painSelectorColor = ['#31de9e', '#20e84f', '#e0fc28', '#f29513', '#f23c13'];

const styles = StyleSheet.create({
    homeContainer : {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10
    },
    sectionLabel : {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10
    }
});

const listStyles = StyleSheet.create({
    listContainer : {
        display: 'flex',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    }
});

const cardStyles = StyleSheet.create({
    cardContainer : orientation => ({
        display: 'flex',
        flexDirection: orientation === 'column' ? 'column' : 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2b2b2b',
        marginBottom: 5,
        borderRadius: 10,
    }),
    cardText : {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        color: 'white',
        fontSize: 16
    },
    cardInfo : {
        margin: 5,
    },
    cardButtons : {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        justifyContent: 'center'
    },
    buttonContainer : color => ({
        height: 45,
        width: 45,
        margin: 5,
        backgroundColor: color === 'red' ? 'red' : blueColor,
        borderRadius: 6,
        justifyContent: 'center'
    }),
    buttonContent : {
        textAlign: 'center',
        color: 'white',
        fontSize: 24
    }
});

const buttonStyles = {
    container : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        marginTop: 10
    },
    logButton : (color, refresh) => ({
        backgroundColor: color === 'blue' ? blueColor : tealColor,
        width: refresh === true ? 50 : 120,
        height: refresh === true ? 40 : 30,
        borderRadius: 6,
        justifyContent: 'center'
    }),
    buttonContent : {
        display: 'flex',
        textAlign: 'center',
        fontSize: 18
    }
}

const entryStlyes = {
    dataEntryContainer : {
        margin: 10
    },
    textInput : {
        backgroundColor: 'grey',
        margin: 5,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    painContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        wrap: 'wrap',
        marginTop: 10,
        marginBottom: 10
    },
    painSelector : (painLevel) => ({
        display: 'flex',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: painSelectorColor[painLevel - 1],
        borderRadius: 5
    }),
    centerText : {
        textAlign: 'center',
        fontSize: 16
    },
    submitButtonContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10
    },
    submitButton : button => ({
        backgroundColor: button === 'cancel' ? painSelectorColor[4] : tealColor,
        margin: 5,
        width: 125,
        height: 35,
        justifyContent: 'center',
        borderRadius: 3,
    }),
    summaryCard : {
        marginTop: 8,
        marginBottom: 8
    }
}

const confirmStyles = {
    confirmContainer : {
        zIndex: 2,
        position: 'absolute'
    }
}

const settingsStyles = {
    settingText: {
        fontSize: 18
    }
}

const chartStyles = {
    chartContainer : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
    },
    chartStyle : { 
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }
}

export { 
    styles, listStyles, cardStyles,
    buttonStyles, entryStlyes, confirmStyles,
    settingsStyles, chartStyles 
};