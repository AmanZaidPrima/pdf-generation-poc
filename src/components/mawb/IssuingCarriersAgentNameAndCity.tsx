import { Text, View } from "@react-pdf/renderer";
import React from "react";

const IssuingCarriersAgentNameAndCity = ({
  agentNameAndCity = "",
  styles = {},
}) => {
  return (
    <View style={{ borderTop: "1px solid black", padding: "2px", ...styles }}>
      <Text style={{ marginBottom: "2px" }}>
        Issuing Carrier's Agent Name and City
      </Text>
      <Text>{agentNameAndCity}</Text>
    </View>
  );
};

export default IssuingCarriersAgentNameAndCity;
