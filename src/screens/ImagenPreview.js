import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import { Sepia, Grayscale, Invert, Cool } from 'react-native-image-filter-kit';
import { MainContext } from '../context/mainContext';

const ImagenPreview = ({route}) => {

    const { uriImg, navigation } = route.params;

    const { fotos, setFotos } = useContext(MainContext)

    const [efecto, setEffect] = useState(0);
    const [fotoProcesada, setFotoProcesada] = useState(uriImg);

    const btnEffects = [
        {id: 0, text: 'Sin Efecto'},
        {id: 1, text: 'Grayscale'},
        {id: 2, text: 'Sepia'},
        {id: 3, text: 'Cool'},
        {id: 4, text: 'Invert'},
    ]
  
    return (
        <View style={{flex: 1, width: '100%'}}>
            <ScrollView style={{flex: 1}}>
                <Text style={globalStyles.title}>Foto a Editar:</Text>
                {   efecto === 0 &&
                    <Image
                        style={styles.imageStyle}
                        source={{uri: uriImg.uri}}
                    />
                }
                {   efecto === 1 &&
                    <Grayscale 
                        onExtractImage={({nativeEvent}) => {
                            setFotoProcesada({id: uriImg.id,uri: nativeEvent.uri})
                        }}
                        extractImageEnabled={true}
                        amount={1}
                        image={
                            <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg.uri}}
                        />
                        }
                    />  
                }
                {   efecto === 2 &&
                    <Sepia 
                        onExtractImage={({nativeEvent}) => {
                            setFotoProcesada({id: uriImg.id,uri: nativeEvent.uri})
                        }}
                        extractImageEnabled={true}
                        amount={1}
                        image={
                            <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg.uri}}
                        />
                        }
                    />  
                }
                {   efecto === 3 &&
                    <Cool
                        onExtractImage={({nativeEvent}) => {
                            setFotoProcesada({id: uriImg.id,uri: nativeEvent.uri})
                        }}
                        extractImageEnabled={true}
                        amount={1}
                        image={
                            <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg.uri}}
                        />
                        }
                    />
                }
                {   efecto === 4 &&
                    <Invert
                        onExtractImage={({nativeEvent}) => {
                            setFotoProcesada({id: uriImg.id,uri: nativeEvent.uri})
                        }}
                        extractImageEnabled={true}
                        amount={1}
                        image={
                            <Image
                            style={styles.imageStyle}
                            source={{uri: uriImg.uri}}
                        />
                        }
                    />   
                }
                {
                    btnEffects.map((item) => (
                        <TouchableOpacity key={item.id} style={globalStyles.btnTouchable} onPress={() => setEffect(item.id)}>
                            <Text style={globalStyles.txtBtnTouchable}>{item.text}</Text>
                        </TouchableOpacity>
                    ))
                }

                <TouchableOpacity 
                    style={globalStyles.btnTouchable} 
                    onPress={() => {
                        const newFotos = fotos.map((item, index) =>{
                            if(index !== uriImg.id) return item;
                            return fotoProcesada;
                        }) 
                        setFotos(newFotos);
                        navigation.goBack();
                    }}>
                    <Text style={globalStyles.txtBtnTouchable}>Guardar Foto</Text>
                </TouchableOpacity>
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