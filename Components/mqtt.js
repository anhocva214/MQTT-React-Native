import * as Mqtt from 'react-native-native-mqtt';
 
const client = new Mqtt.Client('mqtt://192.168.21.102');
client.connect();

const mqttTest = () => {
    client.on(Mqtt.Event.Message, (topic, message) => {
        console.log('Mqtt Message:', topic, message.toString());
    });
}



module.exports = {
    mqttTest: mqttTest()
}