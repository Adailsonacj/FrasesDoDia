import React from 'react'
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native'

const Styles = {

    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginTop: 20

    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
}

const gerarFrase = () => {
    var numAle = Math.random()
    numAle = Math.floor(numAle * 5)

    var frases = Array()
    frases[0] = 'Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará". Deuteronômio 31:6'
    frases[1] = 'mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam. Isaías 40:31'
    frases[2] = 'Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. Jeremias 29:11'
    frases[3] = 'Todavia, como está escrito "Olho nenhum viu, ouvido nenhum ouviu, mente nenhuma imaginou o que Deus preparou para aqueles que o amam"; 1 Coríntios 2:9'
    frases[4] = 'Entregue suas preocupações ao Senhor, e ele o susterá; jamais permitirá que o justo venha a cair. Salmos 55:22'

    Alert.alert(frases[numAle])
}

const App = () => {
    const { principal, botao, textoBotao } = Styles
    return (
        <View style={principal}>
            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity onPress={gerarFrase} style={botao}>
                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View >
    )
}

AppRegistry.registerComponent('FrasesDoDia', () => App)
