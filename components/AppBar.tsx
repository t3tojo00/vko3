import {Appbar} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRoute } from '@react-navigation/native';
type Props =NativeStackScreenProps<any>;
var page = 0;
export function AppB (
    {navigation}:Props,
) {
            const route = useRoute();
    return(
        <Appbar.Header>
            { page != 0 ? <Appbar.BackAction onPress={()=>{navigation.navigate("Home"),page =0,console.log(page)}}></Appbar.BackAction> :null}
            <Appbar.Content title = "test"></Appbar.Content>
            {page == 0 ? <Ionicons
                    name="arrow-forward"
                    size={30}
                    color="#000000"
                    onPress={()=> {navigation.navigate("SecondScreen"),page +=1,console.log(page)}}
                    ></Ionicons> :null }
        </Appbar.Header>
    )

}