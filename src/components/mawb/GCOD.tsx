import { Text, View } from "@react-pdf/renderer";
import React from "react";

const GCOD = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "row",
        borderTop: "1px solid black",
      }}
    >
      <View
        style={{
          flex: 1,
          borderRight: "1px solid black",
        }}
      >
        <View style={{ margin: "auto 0", borderBottom: "1px solid black" }}>
          <Text>G.COD</Text>
        </View>
        <View style={{ margin: "auto 0" }}>
          <Text>J.RFC</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default GCOD;
