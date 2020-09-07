import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ImagesList = ({fotos, navigation}) => {

    const mostrarPreview = (uriImg) => {
        navigation.navigate('ImagePreview', {
            uriImg,
            navigation
        });
    }

    return (
        <View style={styles.container}>
        <Text>Imagen Preview</Text>
        <View style={styles.imgContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {fotos.map((item, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => mostrarPreview(item)}
                >
                    <Image
                    style={styles.imageStyle}
                    source={{uri: item.uri}}
                    />
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>        
    )
}

export default ImagesList

const styles = StyleSheet.create({
    container: {
        borderWidth: 2
    },
    imgContainer: {
        marginTop: 30,
        marginBottom: 20
    },
    imageStyle: {
        flex: 2,
        width: 350,
        height: 250,
        resizeMode: 'cover',
        marginRight: 30,

    }
})
