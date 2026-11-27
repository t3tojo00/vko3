import { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {View,Text} from "react-native"
import { Ionicons } from "@expo/vector-icons";
type Props = NativeStackScreenProps<any>
export const Screen2 = ( {navigation} :Props ) =>{
    useLayoutEffect(() =>{
            navigation.setOptions({
                headerStyle:{backgroundColor:'gray'},
                headerTitleStyle:{color:'black'},
                headerRight:()=>(
                    <Ionicons
                    name="arrow-back"
                    size={20}
                    color="#fff"
                    onPress={()=> navigation.navigate("Home")}
                    ></Ionicons>
                )
            })
        });

    return(
  <View>
    <Text>SECOND SCREEN?
    </Text>
  </View>
    );
}