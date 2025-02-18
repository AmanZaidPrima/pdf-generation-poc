import { Text, View } from "@react-pdf/renderer";
import React from "react";

const PageEndRow = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 7,
          }}
        >
          {"Original 1 (for Issuing Carrier)"}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 7 }}>
          This is a Computer Generated Air Way Bill
        </Text>
      </View>
    </View>
  );
};

export default PageEndRow;
