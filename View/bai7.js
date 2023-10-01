import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const ViewBai7 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text1}>Login</Text>
      <View>
        <View style={[styles.wrapper,styles.pwdTextInput,{ transform: [{ translateX: 20 }] }]}>
          <Image style={styles.img} source={require('../../Shopee/anh/user.png')} resizeMode='stretch' />
          <TextInput style={styles.textInput} placeholder='Email' />
        </View>

        <View style={[styles.wrapper, styles.pwdTextInput,{ transform: [{ translateX: 20 }] }]}>
          <Image style={styles.img} source={require('../../Shopee/anh/lock.png')} resizeMode='stretch' />
          
          <TextInput style={styles.textInput} placeholder='Password' />
          <TouchableOpacity>
            <Image style={styles.img} source={require('../../Shopee/anh/eye.png')} resizeMode='stretch' />
          </TouchableOpacity>

        </View>
      </View>
      <View style={{justifyContent:'center',
                     alignItems:'center'}}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text2}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.text3}>CREATE ACCOUNT</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0A800',
    justifyContent: 'space-around',
    width: width,
    height: height
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#C09B00',
    width: 330,
    height: 54,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginBottom: 15,
    justifyContent: 'center',
    paddingLeft: 5,
    alignItems: 'center',
    marginLeft:10

  },
  pwdTextInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  textInput: {
    width: '100%',
    height: '100%',
    marginLeft: 10
  },
  img: {
    width: 38,
    height: 36
  },
  button: {
    width: 330,
    height: 45,
    backgroundColor: '#060000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 29
  },
  text1: {
    fontFamily: 'Time new Roman',
    fontSize: 30,
    fontWeight: '700',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  text2: {
    fontFamily: 'Time new Roman',
    fontSize: 20,
    fontWeight: '700',
    color:'#FFFFFF',
  },
  text3: {
    fontFamily: 'Time new Roman',
    fontSize: 20,
    fontWeight: '700',
    marginVertical:50
  },
})
export default ViewBai7
