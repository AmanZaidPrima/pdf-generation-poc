import { Text, View } from "@react-pdf/renderer";
import React from "react";

const AgentInfo = ({ agentIATACode = "", agentAccountNo = "" }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            padding: "2px",
          }}
        >
          <Text>Agent's IATA Code</Text>
        </View>
        <View
          style={{
            borderRight: "1px solid black",
            padding: "2px",
          }}
        >
          <Text>{agentIATACode}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottom: "1px solid black",
            padding: "2px",
          }}
        >
          <Text>Account No.</Text>
        </View>
        <View style={{ padding: "2px" }}>
          <Text>{agentAccountNo}</Text>
        </View>
      </View>
    </View>
  );
};

export default AgentInfo;
