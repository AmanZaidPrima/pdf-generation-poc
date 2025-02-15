import { Text, View } from "@react-pdf/renderer";
import React from "react";

const AccountInfo = ({ accountInformation = "" }) => {
  return (
    <View
      style={{
        borderTop: "1px solid black",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1px",
        height: "40px",
      }}
    >
      <Text style={{ fontSize: 7 }}>Account Information</Text>
      <Text style={{ fontSize: 7 }}>{accountInformation}</Text>
    </View>
  );
};

export default AccountInfo;
