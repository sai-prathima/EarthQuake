/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { Provider } from "react-redux";
import { mystore } from "./src/Redux/Store/EarthQuakeStore";
import NavigationFunc from "./src/Components/Screens/NavigationScreen";
import { Selector } from "./src/Selectors/Selectors";
const App = () => {
  return(
    <Provider store={mystore}>
      <NavigationFunc/>
    </Provider>
  )
};


export default App;
