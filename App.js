
import React, { useState } from 'react';
import { View, Text } from 'react-native';

//Context
import { MainContext } from './src/context/mainContext';

//Navigation
import BaseRoot from './src/navigation';

function App() {

  const [fotos, setFotos] = useState([])
  const [fotosProcesadas, setFotosProcesadas] = useState([])
  const [video, setVideo] = useState({})
  const [videoProcesado, setVideoProcesado] = useState({})


  return (
    <MainContext.Provider
      value={{
        fotos,
        setFotos,
        fotosProcesadas,
        setFotosProcesadas,
        video,
        setVideo,
        videoProcesado,
        setVideoProcesado
      }}
    >
      <View style={{flex: 1}}>
        <BaseRoot />
      </View>
    </MainContext.Provider>
  );
}

export default App;