import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { GameEngine } from 'react-native-game-engine'
import Map from './src/map/'
import Physics from './src/map/Physics'

const App = function() {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <StatusBar hidden={true} />
      <GameEngine
        systems={[Physics]} 
        entities={Map()}
        style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
      </GameEngine>
    </View>
  );
}

export default App;