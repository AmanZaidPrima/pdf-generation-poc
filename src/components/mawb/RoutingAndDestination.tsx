import { Text, View } from "@react-pdf/renderer";
import React from "react";
import Trapezoid from "./Trapezoid";

const RoutingAndDestination = ({ styles = {} }) => {
  return (
    <View style={{ flexDirection: "row", ...styles }}>
      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <Text>To</Text>
        <Text>SIN</Text>
      </View>
      <View
        style={{
          borderRight: "1px solid black",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View style={{ padding: "2px" }}>
            <Text style={{ textAlign: "center" }}>By first </Text>
            <Text style={{ textAlign: "center" }}>Carrier</Text>
          </View>
          <Text style={{ padding: "2px" }}>AK</Text>
        </View>

        <View style={{ flex: 2 }}>
          <View style={{ marginRight: "20px" }}>
            <Trapezoid text={"Routing and destination"} />
          </View>
        </View>
      </View>

      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "2px",
        }}
      >
        <Text>To</Text>
        <Text></Text>
      </View>
      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "2px",
        }}
      >
        <Text>By</Text>
        <Text></Text>
      </View>
      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "2px",
        }}
      >
        <Text>To</Text>
        <Text></Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          textAlign: "center",
          padding: "2px",
        }}
      >
        <Text>By</Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default RoutingAndDestination;
