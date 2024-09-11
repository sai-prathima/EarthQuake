import EarthQuakeListing from "./EarthQuakeListing";
import { mystore } from "../../Redux/Store/EarthQuakeStore";
import { render, waitFor } from "@testing-library/react-native";
import "react-native"
import React from "react";
import { Provider } from "react-redux";


it("renders correctly", () => {
    const component = render(
        <Provider store={mystore}>
            <EarthQuakeListing />
        </Provider>
    );
})


it("renders correctly with Flatlist", async () => {
    const component = render(<Provider store={mystore}>
        <EarthQuakeListing />
    </Provider>
    );
    await waitFor(() => {
        component.getByTestId("list");

    });
});

it("renders correctly text", async () => {
    const component = render(<Provider store={mystore}>
        <EarthQuakeListing />
    </Provider>
    );
    await waitFor(() => {
        component.getByTestId("text");

    });
});