import { StyleSheet, View } from "react-native";
import AvatarProfile from "./src/components/AvatarProfile";
import FormLogin from "./src/components/FormLogin";

export default function App() {
  const data = {
    url: "https://randomuser.me/api/portraits/men/36.jpg",
    post: 10,
    following: 20,
    followers: 30,
  };
  return (
    <View style={styles.container}>
      <AvatarProfile
        url={data.url}
        post={data.post}
        following={data.following}
        followers={data.followers}
      />
      <FormLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
