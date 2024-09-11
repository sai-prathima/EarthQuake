import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlatList,View,Text,TouchableOpacity,ActivityIndicator} from "react-native";
import { dataRequested } from "../Action/EarthQuakeAction";
import { useNavigation } from "@react-navigation/native";
import listingStyles from "../../Styles/EarthQuakeListingStyles";
import { Data, Loading } from "../../Selectors/Selectors";
import { DataType } from "../../Interfaces/Interfaces";
import { Constants } from "../Constants/Constants";



//TODO remove naviagtion param and use ueNavigation hook --done
//create a selectors file and expose individual fields in selector --done
//create all functions separate --done
const EarthQuakeListing=()=>{
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const loading=useSelector(Loading)
    const items=useSelector(Data)
   
    useEffect(()=>{
        dispatch(dataRequested())
    },[dispatch])

    console.log(loading)
    console.log(items,"datareceived")
    if(loading){
        return (
            <View style={listingStyles.loadingStyle}>
            <ActivityIndicator size="large" color="black"/>
            </View>
        )
        // console.log("loadinggggg")
        
    }
    
    const render=({item})=>{
        return (
            <TouchableOpacity onPress={()=>{onclick(item)}}>
                <View style={listingStyles.renderView}>
                <Text>{item.properties.title}</Text>
                <Text>{item.properties.mag}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    const onclick=(item:DataType)=>{
        dispatch({type:Constants.SendData,payload:item})
        navigation.navigate("EarthquakeDetails")
    }

   return (
    <View style={listingStyles.mainview}>
            <Text style={listingStyles.text} testID="mytext">
                Earthquake Tracker</Text>
            <FlatList
            testID="list"
            data={items}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={render}
            ItemSeparatorComponent={()=>(<View style={{marginBottom:20}}/>)}
            />
        </View>
        
    )}
        
export default EarthQuakeListing;