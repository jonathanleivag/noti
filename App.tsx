import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
})

export default function App () {
  async function schedulePushNotification () {
    if(Device.isDevice){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Hola soy una notificación',
          body: 'hola soy el cuerpo de la notificación',
          data: { data: 'goes here' }
        },
        trigger: { seconds: 1 }
      })
    }else {
      Alert.alert('Puta la wea xD No se puede enviar notificaciones en el emulador', 'Prueba en un dispositivo real', [{ text: 'Ok watsho' }])
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title='Enviar notificación'
        onPress={async () => schedulePushNotification()}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
