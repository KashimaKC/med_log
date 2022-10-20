import { StyleSheet } from "react-native";

let blueColor = '#46aae3';
let tealColor = '#31decf';

const styles = StyleSheet.create({
    homeContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

const listStyles = StyleSheet.create({
    listContainer : {
        marginLeft: 10,
        marginRight: 10
    }
});

const cardStyles = StyleSheet.create({
    cardContainer : {
        backgroundColor: '#2b2b2b',
        marginBottom: 5,
        borderRadius: 10,
    },
    cardText : {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        color: 'white',
        fontSize: 16
    }
});

const buttonStyles = {
    container : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logButton : color => ({
        backgroundColor: color === 'blue' ? blueColor : tealColor,
        width: 120,
        height: 30,
        borderRadius: 6,
        fontSize: 22,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    }),
}

const entryStlyes = {
    dataEntryContainer : {
        margin: 10
    }
}

export { 
    styles, listStyles, cardStyles,
    buttonStyles, entryStlyes 
};