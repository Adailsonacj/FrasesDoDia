import React from 'react'
import { Text, AppRegistry, View, Button, TouchableOpacity } from 'react-native'

const Styles = {
    estiloTexto: {
        fontSize: 20,
        backgroundColor: '#87CEEB',
        padding: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    estiloView: {
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
    },
    principal: {
        paddingTop: 40
    },

    textoBotao: {
        fontSize: 15,
        padding: 10,
        color: 'skyblue',
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderColor: 'skyblue',
        borderWidth: 3,
        borderRadius: 8
    }
}

const pressButton = () => {
    alert('Botão Pressionado')
}

const App = () => {
    const { estiloTexto, estiloView, estilo2, principal, botao, textoBotao } = Styles
    return (
        /*
        <View style={estiloView}>
            <Text style={estiloTexto}>Frases do Dia</Text>
            <Text style={estilo2}>Frases do Dia</Text>
        </View>
        */
        <View style={principal}>
            <Button title="Clique aqui"
                onPress={pressButton}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <TouchableOpacity style={botao} onPress={pressButton}>
                <Text style={textoBotao}>CLIQUE AQUI</Text>
            </TouchableOpacity>
        </View>
    )
}

AppRegistry.registerComponent('FrasesDoDia', () => App)
