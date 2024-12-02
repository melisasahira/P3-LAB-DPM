import React from "react";
import { SafeAreaView } from "react-native";
import MoodTrackerScreen from "./src/screens/MoodTrackerScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MoodTrackerScreen />
    </SafeAreaView>
  );
};

export default App;
