import { Text, View } from "@react-pdf/renderer";
import React from "react";

const PageStartRow = ({ leftText = "", rightText = "", style = {} }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2px",
        ...style,
      }}
    >
      <Text style={{ fontFamily: "Helvetica-Bold" }}>{leftText}</Text>
      <Text
        style={{
          width: "clamp(200px, 70% + 20px, 800px)",
          backgroundColor: "red",
          fontFamily: "Helvetica-Bold",
        }}
      >
        {rightText}
      </Text>
    </View>
  );
};

export default PageStartRow;
