import { Text, View } from "@react-pdf/renderer";
import React from "react";

const DeclaredValues = ({
  currency = "",
  chargesCode = "",
  weightValuePrepaid = "",
  weightValueCollect = "",
  otherChargesPrepaid = "",
  otherChargesCollect = "",
  declaredValueCarriage = "",
  declaredValueCustoms = "",
}) => {
  return (
    <View
      style={{
        borderTop: "1px solid black",
        flexDirection: "row",
        minHeight: "40px",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            borderRight: "1px solid black",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ padding: "1px" }}>Currency</Text>
          <Text>{currency}</Text>
        </View>
        <View
          style={{
            borderRight: "1px solid black",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ padding: "1px" }}>
            <Text>Chgs</Text>
            <Text>Code</Text>
          </View>
          <Text>{chargesCode}</Text>
        </View>
        <View
          style={{
            borderRight: "1px solid black",
            flexDirection: "column",
          }}
        >
          <View style={{ borderBottom: "1px solid black" }}>
            <Text style={{ textAlign: "center", padding: "1px" }}>WT/VAL</Text>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                borderRight: "1px solid black",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>PPD</Text>
              <Text>{weightValuePrepaid}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>COLL</Text>
              <Text>{weightValueCollect}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderRight: "1px solid black",
            flexDirection: "column",
          }}
        >
          <View style={{ borderBottom: "1px solid black" }}>
            <Text style={{ textAlign: "center", padding: "1px" }}>Other</Text>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                borderRight: "1px solid black",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>PPD</Text>
              <Text>{otherChargesPrepaid}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>COLL</Text>
              <Text>{otherChargesCollect}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            borderRight: "1px solid black",
            flexDirection: "column",
            padding: "1px",
          }}
        >
          <Text>Declared Value for </Text>
          <Text>Carriage</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{declaredValueCarriage}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "column", padding: "1px" }}>
          <Text>Declared Value for </Text>
          <Text>Customs</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{declaredValueCustoms}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeclaredValues;
