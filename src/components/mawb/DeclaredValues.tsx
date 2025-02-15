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
          <Text style={{ fontSize: 7, padding: "1px" }}>Currency</Text>
          <Text style={{ fontSize: 7 }}>{currency}</Text>
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
            <Text style={{ fontSize: 7 }}>Chgs</Text>
            <Text style={{ fontSize: 7 }}>Code</Text>
          </View>
          <Text style={{ fontSize: 7 }}>{chargesCode}</Text>
        </View>
        <View
          style={{
            borderRight: "1px solid black",
            flexDirection: "column",
          }}
        >
          <View style={{ borderBottom: "1px solid black" }}>
            <Text style={{ fontSize: 7, textAlign: "center", padding: "1px" }}>
              WT/VAL
            </Text>
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
              <Text style={{ fontSize: 7 }}>PPD</Text>
              <Text style={{ fontSize: 7 }}>{weightValuePrepaid}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 7 }}>COLL</Text>
              <Text style={{ fontSize: 7 }}>{weightValueCollect}</Text>
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
            <Text style={{ fontSize: 7, textAlign: "center", padding: "1px" }}>
              Other
            </Text>
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
              <Text style={{ fontSize: 7 }}>PPD</Text>
              <Text style={{ fontSize: 7 }}>{otherChargesPrepaid}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 7 }}>COLL</Text>
              <Text style={{ fontSize: 7 }}>{otherChargesCollect}</Text>
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
          <Text style={{ fontSize: 7 }}>Declared Value for </Text>
          <Text style={{ fontSize: 7 }}>Carriage</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 7 }}>{declaredValueCarriage}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "column", padding: "1px" }}>
          <Text style={{ fontSize: 7 }}>Declared Value for </Text>
          <Text style={{ fontSize: 7 }}>Customs</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 7 }}>{declaredValueCustoms}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeclaredValues;
