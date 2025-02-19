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
        flexGrow: 1,
        ...styles,
      }}
    >
      <View style={{ flex: 0.6 }}>
        <Text style={{ fontFamily: "Helvetica-Bold" }}>
          {`${typeLabel} Name and Address`}
        </Text>
        <View style={{ margin: "auto 0" }}>
          <Text>{name}</Text>
          <Text>{address}</Text>
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
              fontSize: 8,
              fontFamily: "Helvetica-Bold",
              marginBottom: "1px",
            }}
          >{`${typeLabel} account number`}</Text>
          <Text>{accountNumber}</Text>
        </View>
        {type === "shipper" ? <Text>ID: {id}</Text> : null}
      </View>
    </View>
  );
};

export default NameAddress;
