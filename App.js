import {
  ScrollView,
  StatusBar
} from "react-native";

import { 
  Home
} from "./screens";

export default function App() {
  return (
    <>
    <StatusBar
    backgroundColor="#ED4723"
    barStyle="white-content"
    />
    <ScrollView>
    <Home/>
    </ScrollView>
    </>
  );
}


