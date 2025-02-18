import { Text, View } from "@react-pdf/renderer";
import React from "react";

const HandlingInfo = ({ handlingInfo = "", style = {} }) => {
  return (
    <View
      style={{
        border: "1px solid black",
        borderTop: 0,
        ...style,
      }}
    >
      <View
        style={{
          position: "relative",
          height: "30px",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "2px 0px",
        }}
      >
        <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}>
          Handling Information
        </Text>
        <Text style={{ fontSize: 7 }}>{handlingInfo}</Text>
        <View
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            width: "100px",
            padding: "2px",
          }}
        >
          <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}>SCI</Text>
        </View>
      </View>
    </View>
  );
};

export default HandlingInfo;
