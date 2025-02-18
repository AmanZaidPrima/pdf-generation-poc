import { Text, View } from "@react-pdf/renderer";
import React from "react";

const SignatureOfIssuingCarrier = ({ date = "", place = "" }) => {
  return (
    <View
      style={{
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        height: "60px",
        flexDirection: "row",
        alignItems: "flex-end",
        flexGrow: 1,
      }}
    >
      <View style={{ margin: "0 3px", flex: 0.25 }}>
        <View
          style={{
            padding: "2px",
            borderBottom: "1px solid black",
          }}
        >
          <Text style={{ fontSize: 8, textAlign: "center" }}>{date}</Text>
        </View>
        <View style={{ padding: "2px" }}>
          <Text style={{ fontSize: 8, textAlign: "center" }}>EXECUTED ON</Text>
        </View>
      </View>
      <View style={{ margin: "0 3px", flex: 0.15 }}>
        <View
          style={{
            padding: "2px",
            borderBottom: "1px solid black",
          }}
        >
          <Text style={{ fontSize: 8, textAlign: "center" }}>{place}</Text>
        </View>
        <View style={{ padding: "2px" }}>
          <Text style={{ fontSize: 8, textAlign: "center" }}>{"(Place)"}</Text>
        </View>
      </View>
      <View style={{ margin: "0 3px", flex: 0.6 }}>
        <View
          style={{
            padding: "2px",
            borderBottom: "1px solid black",
          }}
        >
          <Text style={{ fontSize: 8, textAlign: "center" }}></Text>
        </View>
        <View style={{ padding: "2px" }}>
          <Text style={{ fontSize: 8, textAlign: "center" }}>
            Signature of Issuing Carrier or its Agent
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignatureOfIssuingCarrier;
