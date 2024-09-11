import React from "react";
import { View,Text,StyleSheet} from "react-native";
import { useSelector } from "react-redux";
import { ItemData } from "../../Selectors/Selectors";

import detailsStyles from "../../Styles/EarthQuakeDetailsStyles";

const EarthQuakeDetils=()=>{
    // const {item}=route.params
    // console.log(item)
    // const dataitem=useSelector((state:any)=>state.data)
    const dataitem=useSelector(ItemData);
    return (
        <View style={detailsStyles.Topview}>
            <View style={detailsStyles.Itemview}>
            <Text style={detailsStyles.text}>{dataitem.properties.place}</Text>
            <Text style={detailsStyles.text}>{dataitem.properties.mag}</Text>
            </View>
        </View>
    )

}
//TODO avoid route params and use selectors and put styles in stylesheet object and move all styles to other file --done

export default EarthQuakeDetils;