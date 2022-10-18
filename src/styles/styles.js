import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContainer : {
        display: 'flex',
        flexDirection: 'column'
    }
});

const listStyles = StyleSheet.create({
    listContainer : {
        margin: 10
    }
});

const cardStyles = StyleSheet.create({
    cardContainer : {
        backgroundColor: '#2b2b2b',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10
    },
    cardText : {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        color: 'white',
        fontSize: 16
    }
});

export { styles, listStyles, cardStyles };