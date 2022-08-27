import { View, StyleSheet} from 'react-native'
import {COLORS} from './src/assets/theme'
import Auth from './src/navigations/authNav'

import { Provider } from 'react-redux'
import store from './src/redux/store'



export default function App() {


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Auth />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: COLORS.primary
  }
})
