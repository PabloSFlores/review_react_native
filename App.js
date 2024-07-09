import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/components/Navigation";

export default function App() {
  const data = {
    url: "https://randomuser.me/api/portraits/men/36.jpg",
    post: 10,
    following: 20,
    followers: 30,
  };
  return (<Navigation/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
