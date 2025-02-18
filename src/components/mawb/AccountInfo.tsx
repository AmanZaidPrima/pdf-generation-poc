import { Text, View } from "@react-pdf/renderer";
import React from "react";

const AccountInfo = ({ accountInformation = "" }) => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1px",
        minHeight: "40px",
      }}
    >
      <Text style={{ fontSize: 7 }}>Account Information</Text>
      <Text style={{ fontSize: 7 }}>{accountInformation}</Text>
    </View>
  );
};

export default AccountInfo;
