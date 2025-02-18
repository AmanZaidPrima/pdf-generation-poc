import { Text, View } from "@react-pdf/renderer";
import React from "react";
import Trapezoid from "./Trapezoid";

const WeightCharges = ({ prepaid = "", collect = "" }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Trapezoid text={"Pre paid"} />
        <Trapezoid text={"Weight Charge"} />
        <Trapezoid text={"Collect"} />
      </View>
      <View style={{ flexGrow: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            borderRight: "1px solid black",
            padding: "4px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{prepaid}</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: "4px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{collect}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeightCharges;
