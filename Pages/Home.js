import { useEffect, useState, BackHandler } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-community/google-signin';

function Home () {

  GoogleSignin.configure({

    webClientId:
    
    '260759292128-4h94uja4bu3ad9ci5qqagubi6k1m0jfv.apps.googleusercontent.com',
    
    }); 
  const loginGoogle = async ()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, googleProvider);
    const userGoogle = result.user;
    console.log(result.user);
  }
return (
 <View style={styles.container}>
  <TouchableOpacity onPress={loginGoogle}>
  <Text>Login com google</Text>
  </TouchableOpacity>
    
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf : 'center'
  },
  
});
export default Home;

