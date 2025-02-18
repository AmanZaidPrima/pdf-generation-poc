import { Text, View } from "@react-pdf/renderer";
import React from "react";
import Trapezoid from "./Trapezoid";

const ChargesTrapezoids = ({
  chargeName = "",
  charge = "",
  style = {},
  trapezoidMargins = "40px",
}) => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "column",
        borderTop: "1px solid black",
        ...style,
      }}
    >
      <View
        style={{ marginLeft: trapezoidMargins, marginRight: trapezoidMargins }}
      >
        <Trapezoid text={chargeName} />
      </View>
      <View style={{ flexGrow: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            borderRight: "1px solid black",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{charge}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default ChargesTrapezoids;
