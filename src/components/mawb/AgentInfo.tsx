import { Text, View } from "@react-pdf/renderer";
import React from "react";

const AgentInfo = ({ agentIATACode = "", agentAccountNo = "" }) => {
  return (
    <View style={{ flexGrow: 1, flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottom: "1px solid black",
            borderRight: "1px solid black",
            padding: "2px",
            flexGrow: 1,
          }}
        >
          <Text style={{ margin: "auto 0" }}>Agent's IATA Code</Text>
        </View>
        <View
          style={{
            borderRight: "1px solid black",
            padding: "2px",
            flexGrow: 1,
          }}
        >
          <Text style={{ margin: "auto 0" }}>{agentIATACode}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderBottom: "1px solid black",
            padding: "2px",
            flexGrow: 1,
          }}
        >
          <Text style={{ margin: "auto 0" }}>Account No.</Text>
        </View>
        <View style={{ padding: "2px", flexGrow: 1 }}>
          <Text style={{ margin: "auto 0" }}>{agentAccountNo}</Text>
        </View>
      </View>
    </View>
  );
};

export default AgentInfo;
