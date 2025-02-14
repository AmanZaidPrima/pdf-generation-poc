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
        <Text style={{ fontSize: 7 }}>To</Text>
        <Text style={{ fontSize: 7 }}>SIN</Text>
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
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <Text style={{ fontSize: 7 }}>By first </Text>
            <Text style={{ fontSize: 7 }}>Carrier</Text>
          </View>
          <Text style={{ fontSize: 7 }}>AK</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ marginLeft: "40px", marginRight: "30px" }}>
            <Trapezoid text={"Routing and destination"} />
          </View>
        </View>
      </View>

      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <Text style={{ fontSize: 7 }}>To</Text>
        <Text style={{ fontSize: 7 }}></Text>
      </View>
      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <Text style={{ fontSize: 7 }}>By</Text>
        <Text style={{ fontSize: 7 }}></Text>
      </View>
      <View
        style={{
          borderRight: "1px solid black",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <Text style={{ fontSize: 7 }}>To</Text>
        <Text style={{ fontSize: 7 }}></Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          textAlign: "center",
          padding: "1px",
        }}
      >
        <Text style={{ fontSize: 7 }}>By</Text>
        <Text style={{ fontSize: 7 }}></Text>
      </View>
    </View>
  );
};

export default RoutingAndDestination;
