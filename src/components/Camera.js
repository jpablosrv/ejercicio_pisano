import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import PendingView from './PendingView';
import { AppColors } from '../styles/AppStyles';

const Camera = ({ capturaFotoHandler, capturaVideoHandler }) => {
  const [isRecording, setIsRecording] = useState(false);
  
  takePicture = async function(camera) {
    console.log({camera});

    const options = {quality: 0.5, base64: true};
    try {
      const data = await camera.takePictureAsync(options);
      capturaFotoHandler(data);
    } catch (error) {
      console.error(error)
      console.log(error)
    }
  };

  const takeVideo = async (camera) => {
    console.log({camera});

    const recordOptions = {
      quality: 0.5, 
      base64: true,
      maxDuration: 30,
      maxFileSize: 204800
    };

    try {
      const promise = camera.recordAsync(recordOptions);
      if(promise) {
        setIsRecording(true);
        const data = await promise;
        capturaVideoHandler(data);
        setIsRecording(false);
        console.warn('Video Guardado : ', data);
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> FOTO </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => takeVideo(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> VIDEO </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
  },
  preview: {
    flex: 1,
    width: ' 100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    height: 350,
    borderWidth: 1,
    borderColor: AppColors.colors.black
  },
  previewRecording: {
    flex: 1,
    width: ' 100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    height: 350,
    borderWidth: 5,
    borderColor: AppColors.colors.cherry_red
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
