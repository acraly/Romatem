import { StyleSheet } from 'react-native';
import AppRouter from './approuter/AppRouter';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text } from '@rneui/themed';


export default function App() {
  return (
    <AppRouter   />
    // </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },

});
