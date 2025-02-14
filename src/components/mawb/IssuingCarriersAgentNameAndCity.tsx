import { Text, View } from "@react-pdf/renderer";
import React from "react";

const IssuingCarriersAgentNameAndCity = ({
  agentNameAndCity = "",
  styles = {},
}) => {
  return (
    <View style={{ borderTop: "1px solid black", padding: "2px", ...styles }}>
      <Text style={{ fontSize: 8, marginBottom: "2px" }}>
        Issuing Carrier's Agent Name and City
      </Text>
      <Text style={{ fontSize: 8 }}>{agentNameAndCity}</Text>
    </View>
  );
};

export default IssuingCarriersAgentNameAndCity;
