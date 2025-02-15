import { Text, View } from "@react-pdf/renderer";
import React from "react";

const TYPE_LABELS = {
  shipper: "Shipper's",
  consignee: "Consignee's",
};

const NameAddress = ({
  type = "shipper",
  name = "",
  address = "",
  accountNumber = "",
  id = "",
  styles = {},
}) => {
  const typeLabel = TYPE_LABELS[type];

  return (
    <View
      style={{
        flexDirection: "row",
        minHeight: "80px",
        flexGrow: 1,
        ...styles,
      }}
    >
      <View style={{ flex: 0.6 }}>
        <Text
          style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}
        >{`${typeLabel} Name and Address`}</Text>
        <View style={{ margin: "auto 0" }}>
          <Text style={{ fontSize: 8 }}>{name}</Text>
          <Text style={{ fontSize: 8 }}>{address}</Text>
        </View>
      </View>
      <View style={{ flex: 0.4 }}>
        <View
          style={{
            borderLeft: "1px solid black",
            borderBottom: "1px solid black",
            padding: "1px",
            marginBottom: "2px",
          }}
        >
          <Text
            style={{
              fontSize: 7,
              fontFamily: "Helvetica-Bold",
              marginBottom: "1px",
            }}
          >{`${typeLabel} account number`}</Text>
          <Text style={{ fontSize: 7 }}>{accountNumber}</Text>
        </View>
        {type === "shipper" ? (
          <Text style={{ fontSize: 7 }}>ID: {id}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default NameAddress;
