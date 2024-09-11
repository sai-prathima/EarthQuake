import React from "react";
import {render} from "@testing-library/react-native";
import {View,ActivityIndicator} from "react-native";
import EarthQuakeListing from "./EarthQuakeListing";
import { mystore } from "../../Redux/Store/EarthQuakeStore";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";

// it('Should return true if accessibility label matches',()=>{
//     const {getByAccessibilityHint}=render(
//         <View>
//             <ActivityIndicator accessibilityHint='loading'/>
//         </View>
//     )
//     getByAccessibilityHint('loading')
// })

const tree = create(
    <Provider store={mystore}>
        <EarthQuakeListing />
    </Provider>
    )


test("Earthquaketest",()=>{
    const test=tree.root.findByProps({testID:"mytext"}).props;
    expect(text.children).toEqual("mytext")
})