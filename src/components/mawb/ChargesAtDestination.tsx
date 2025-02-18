import { Text, View } from "@react-pdf/renderer";
import React from "react";
import Trapezoid from "./Trapezoid";

const ChargesAtDestination = ({ changes = "" }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "row",
        borderTop: "1px solid black",
      }}
    >
      <View style={{ flex: 1, borderRight: "1px solid black" }}>
        <View
          style={{
            padding: "4px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto 0",
          }}
        >
          <Text>For Carrier Use only at Destination</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: "20px", marginRight: "40px" }}>
          <Trapezoid text={"Charges at Destination"} />
        </View>
        <View
          style={{
            padding: "4px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto 0",
          }}
        >
          <Text>{changes}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChargesAtDestination;
