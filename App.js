/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useRef} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MQTT from 'sp-react-native-mqtt';
// import mqttjs from './Components/mqtt'

const App = () => {
  const useComponentWillMount = func => { const willMount = useRef(true); if (willMount.current) { func(); } willMount.current = false; };

  const mqttTest = () => {
    return new Promise((resolve, reject) => {

      MQTT.createClient({
        uri: 'mqtt://192.168.21.102:1883',
        // clientId: 'your_client_id'
      }).then(function(client) {
      
        client.on('message', function(msg) {
          resolve("hello world");
          console.log(msg.data);
        });
      
        client.on('connect', function() {
          console.log('connected');
          client.subscribe('myTopic', 0);
          // client.publish('myTopic', "test", 0, false);
          
        });
      
        client.connect();
      }).catch(function(err){
        console.log(err);
      });
      
      
    })
  }

  useComponentWillMount(async () => {
    console.log(await mqttTest());

  })

  return (
    <>
      <View>
        <Text>Hello world New</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
