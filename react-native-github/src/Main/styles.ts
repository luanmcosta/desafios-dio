import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({

    container:{
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 10
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        lineHeight: 24,
        marginBottom: 4
    },
    description: {
        color: 'white',
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 10
    },
    button: {
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        flexDirection: "column",
        borderRadius: 10,
    }

});

