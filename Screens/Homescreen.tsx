import {useLayoutEffect} from "react"
import { View,Text } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from '@expo/vector-icons/Ionicons'
type Props =NativeStackScreenProps<any>
export default function HomePage({navigation}:Props){
        useLayoutEffect(() =>{
        navigation.setOptions({
            headerStyle:{backgroundColor:'gray'},
            headerTitleStyle:{color:'black'},
            headerRight:()=>(
                <Ionicons
                name="arrow-forward"
                size={20}
                color="#fff"
                onPress={()=> navigation.navigate("SecondScreen")}
                ></Ionicons>
            )
        })
    });

    return(
  <View>
    <Text>Homescreen???
    </Text>
  </View>
    );
}