import React from 'react'
import {Text, AppRegistry} from 'react-native'

const Styles = {
    esiloTexto:{
        fontSize: 20,
        backgroundColor: '#87CEEB',
        padding: 10,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
}

const App = () => {
    return (
        <Text style={Styles.esiloTexto}>Frases do Dia</Text>
    )
}

AppRegistry.registerComponent('FrasesDoDia', () => App)
