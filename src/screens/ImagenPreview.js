import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import { Sepia, Grayscale, Invert, Cool } from 'react-native-color-matrix-image-filters';

const ImagenPreview = ({route}) => {

    const { uriImg } = route.params;

    const [efecto, setEffect] = useState(0);

    const btnEffects = [
        {id: 0, text: 'Sin Efecto'},
        {id: 1, text: 'Grayscale'},
        {id: 2, text: 'Sepia'},
        {id: 3, text: 'Cool'},
        {id: 4, text: 'Invert'},
    ]
  
    return (
        <View style={{flex: 1, width: '100%'}}>
            <ScrollView>
                <Text style={globalStyles.title}>Foto a Editar:</Text>
                {   efecto === 0 &&
                    <Image
                        style={styles.imageStyle}
                        source={{uri: uriImg}}
                    />
                }
                {   efecto === 1 &&
                    <Grayscale>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg}}
                        />
                    </Grayscale>
                }
                {   efecto === 2 &&
                    <Sepia>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg}}
                        />
                    </Sepia>
                }
                {   efecto === 3 &&
                    <Cool>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg}}
                        />
                    </Cool>
                }
                {   efecto === 4 &&
                    <Invert>
                        <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg}}
                        />
                    </Invert>
                }
                {
                    btnEffects.map((item) => (
                        <TouchableOpacity key={item.id} style={globalStyles.btnTouchable} onPress={() => setEffect(item.id)}>
                            <Text style={globalStyles.txtBtnTouchable}>{item.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default ImagenPreview;

const styles = StyleSheet.create({
    imageStyle: {
        flex: 2,
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginRight: 10
    }
});