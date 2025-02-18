import React from "react";
import { Text, View } from "@react-pdf/renderer";

const TableMainRow = ({
  noOfPieces = "",
  grossWeight = "",
  unit = "",
  commodityItemNo = "",
  rateClass = "",
  chargeableWeight = "",
  rate = "",
  total = "",
  natureAndQuantity = "",
  style = {},
}) => {
  return (
    <View
      style={{
        ...style,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{noOfPieces}</Text>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{grossWeight}</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{unit}</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{rateClass}</Text>
      </View>
      <View
        style={{
          flex: 1.2,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          {commodityItemNo}
        </Text>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          {chargeableWeight}
        </Text>
      </View>
      <View
        style={{
          flex: 1.2,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{rate}</Text>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{total}</Text>
      </View>
      <View style={{ flex: 4.5, padding: 2 }}>
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          {natureAndQuantity}
        </Text>
      </View>
    </View>
  );
};

export default TableMainRow;
