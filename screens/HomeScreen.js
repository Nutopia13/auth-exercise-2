import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {
  const navigation = useNavigation()
  const { logout } = useAuth()
  return (
    <View>
      <Button title='Go to Chat' onPress={()=> navigation.navigate('Chat')} ></Button>
      <Button title='Log Out' onPress={logout} ></Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})