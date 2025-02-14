import { Text, View } from "@react-pdf/renderer";
import React from "react";

const PageStartRow = ({ leftText = "", rightText = "" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2px",
      }}
    >
      <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}>
        {leftText}
      </Text>
      <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}>
        {rightText}
      </Text>
    </View>
  );
};

export default PageStartRow;
