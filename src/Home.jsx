import { View, Text , ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    const [data,setData] = useState([])

    const fectData = async () => {
        try {
            const respon = await fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api')
            const data = await respon.json()
            setData(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fectData()
    },[])
  return (
    <ScrollView>
        {
            data?.map((data , index) =>{
                return(
                    <View key={index}>
                        <Text>{data.doa}</Text>
                        <Text>{data.ayat}</Text>
                        <Text>{data.latin}</Text>
                    </View>
                )
            })
        }
    </ScrollView>
  )
}