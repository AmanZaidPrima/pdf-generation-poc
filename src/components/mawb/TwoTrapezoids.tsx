import React from "react";
import { Text, View } from "@react-pdf/renderer";
import Trapezoid from "./Trapezoid";

const TwoTrapezoids = ({
  firstColName = "",
  firstColValue = "",
  secondColName = "",
  secondColValue = "",
}) => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "row",
        borderTop: "1px solid black",
      }}
    >
      <View style={{ flex: 1, borderRight: "1px solid black" }}>
        <View style={{ marginLeft: "20px", marginRight: "40px" }}>
          <Trapezoid text={firstColName} />
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
          <Text>{firstColValue}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: "20px", marginRight: "40px" }}>
          <Trapezoid text={secondColName} />
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
          <Text>{secondColValue}</Text>
        </View>
      </View>
    </View>
  );
};

export default TwoTrapezoids;
