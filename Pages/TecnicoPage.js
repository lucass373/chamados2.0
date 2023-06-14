import { useEffect, useState, BackHandler } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, StatusBar, Text, View, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import  {init}  from "../firebase.js";

function Home () {
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
  <Text>Login como Técnico</Text>
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

