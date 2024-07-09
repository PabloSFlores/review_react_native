import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "@rneui/themed";
import React from "react";

export default function AvatarProfile(props) {
  const { url, post, following, followers } = props;
  return (
    <View >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ backgroundColor: "pink", padding: 3, borderRadius: 100 }}
        >
          <View
            style={{ backgroundColor: "white", padding: 3, borderRadius: 200 }}
          >
            <Avatar
              size={100}
              rounded
              source={{ uri: url }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{post}</Text>
            <Text>Post</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{following}</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column", marginTop: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>OOTD EVERYDAY</Text>
        <Text style={{ fontSize: 15 }}>Fit check </Text>
        <Text style={{ fontSize: 15 }}>You know we will hype you up!</Text>
      </View>
    </View>
  );
}
