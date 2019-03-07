import React from 'react'
import { Text, AppRegistry, View } from 'react-native'

const Styles = {
    estiloTexto: {
        fontSize: 20,
        backgroundColor: '#87CEEB',
        padding: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    estiloView:{
        backgroundColor: 'skyblue',
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    estilo2: {
        fontSize: 10,
        backgroundColor: '#87CEEB',
        padding: 10,
        color: '#fff',
        fontWeight: 'bold'
    }
}

const App = () => {
    const {estiloTexto, estiloView, estilo2} = Styles
    return (
        <View style={estiloView}>
            <Text style={estiloTexto}>Frases do Dia</Text>
            <Text style={estilo2}>Frases do Dia</Text>
        </View>
    )
}

AppRegistry.registerComponent('FrasesDoDia', () => App)
