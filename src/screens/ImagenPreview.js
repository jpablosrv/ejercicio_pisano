import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {MainContext} from '../context/mainContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';

const ImagenPreview = ({route}) => {

    const { uriImg } = route.params;

    const btnEffects = [
        {text: 'Efecto 1'},
        {text: 'Efecto 2'},
        {text: 'Efecto 3'},
        {text: 'Efecto 4'},
    ]

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Text style={globalStyles.title}>Imagen a modificar : </Text>
                <Image
                    style={styles.imageStyle}
                    source={{uri: uriImg}}
                />
                {
                    btnEffects.map((item, index) => (
                        <TouchableOpacity key={index} style={globalStyles.btnTouchable}>
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