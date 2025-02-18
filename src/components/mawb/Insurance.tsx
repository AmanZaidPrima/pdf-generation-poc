import { Text, View } from "@react-pdf/renderer";
import React from "react";

const Insurance = ({ amountOfInsurance = "" }) => {
  return (
    <View
      style={{
        borderTop: "1px solid black",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 0.3,
          borderRight: "1px solid black",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>Amount of insurance</Text>
        <Text>{amountOfInsurance}</Text>
      </View>
      <View style={{ flex: 0.7, padding: "2px" }}>
        <Text>
          INSURANCE - If carrier offers insurance and such insurance is
          requested in accordance with conditions on reverse hereof, indicate
          amount to be insured in figures in box marked Amount.
        </Text>
      </View>
    </View>
  );
};

export default Insurance;
