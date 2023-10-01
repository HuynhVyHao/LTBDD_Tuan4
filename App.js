import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import ViewBai1 from './View/bai1';
import ViewBai2 from './View/bai2';
import ViewBai3 from './View/bai3';
import ViewBai4 from './View/bai4';
import ViewBai5 from './View/bai5';
import ViewBai6 from './View/bai6';
import ViewBai7 from './View/bai7';
import ViewBai8 from './View/bai8';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal
      >  <View style={styles.wrapper}><ViewBai8 /></View>
         <View style={styles.wrapper}><ViewBai7 /></View>
         <View style={styles.wrapper}><ViewBai6 /></View>
         <View style={styles.wrapper}><ViewBai5 /></View>
         <View style={styles.wrapper}><ViewBai4 /></View>
         <View style={styles.wrapper}><ViewBai3 /></View> 
         <View style={styles.wrapper}><ViewBai1 /></View> 
         <View style={styles.wrapper}><ViewBai2 /></View>  


       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 2
  }
});
