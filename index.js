import React from 'react'
import { Text, AppRegistry, View, Image } from 'react-native'

const Styles = {

    principal: {
        paddingTop: 40
    }
}

const App = () => {
    const { principal } = Styles
    return (
        <View style={principal}>
            <Image source={require('./imgs/uvas.png')} />
            <Image source={{ uri: 'https://www.festisite.com/static/partylogo/img/logos/nsa.png' }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}

AppRegistry.registerComponent('FrasesDoDia', () => App)
