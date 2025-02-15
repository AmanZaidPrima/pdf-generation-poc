import { Text, View } from "@react-pdf/renderer";
import React from "react";

const TableFooterRow = ({
  totalNoOfPieces = "",
  totalGrossWeight = "",
  totalOfTotal = "",
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
          borderTop: "1px solid grey",
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          {totalNoOfPieces}
        </Text>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
          borderTop: "1px solid grey",
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>
          {totalGrossWeight}
        </Text>
      </View>
      <View
        style={{
          flex: 0.8,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      ></View>
      <View
        style={{
          flex: 0.8,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      ></View>
      <View
        style={{
          flex: 1.2,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      ></View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      ></View>
      <View
        style={{
          flex: 1.2,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      ></View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
          borderTop: "1px solid grey",
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center" }}>{totalOfTotal}</Text>
      </View>
      <View style={{ flex: 4.5, padding: 2 }}></View>
    </View>
  );
};

export default TableFooterRow;
