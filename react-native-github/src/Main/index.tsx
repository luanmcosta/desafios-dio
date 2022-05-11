import React from 'react'
import {Linking, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native'
import { styles } from './styles'

const GITHUB_URL = "https://github.com/luanmcosta"
const GITHUB_IMG = "https://github.com/luanmcosta.png"



export function Main(){

    function handleOpenInGithub(){
        Linking.canOpenURL(GITHUB_URL)
        .then(() => Linking.openURL(GITHUB_URL))
        
    }

    return <>
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri: GITHUB_IMG}} />
            <Text style={styles.name}>
                Luan M. Costa
            </Text>
            <Text style={styles.description}>
                FullStack Developer
            </Text>
            <TouchableOpacity onPress={handleOpenInGithub} style={styles.button}>
                <Text>Open in Gittub</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </>
}

