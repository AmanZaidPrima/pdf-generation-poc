import React from "react";
import { Text, View } from "@react-pdf/renderer";

const TableHeaderRow = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottom: "1px solid black",
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
        <Text style={{ textAlign: "center" }}>No. of Pieces</Text>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ textAlign: "center" }}>Gross Weight</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ textAlign: "center" }}>Kg/lb</Text>
      </View>
      <View
        style={{
          flex: 0.8,
          padding: 2,
          position: "relative",
          height: "30px",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50px",
          }}
        >
          <Text style={{ textAlign: "center" }}>Rate Class</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.2,
          padding: 2,
          marginTop: "auto",
          borderTop: "1px solid black",
          borderLeft: "1px solid black",
        }}
      >
        <View>
          <Text style={{ textAlign: "center" }}>Commodity Item No.</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
          borderLeft: "1px solid black",
        }}
      >
        <Text style={{ textAlign: "center" }}>Chargeable Weight</Text>
      </View>
      <View
        style={{
          flex: 1.2,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ textAlign: "center" }}>Rate / Charge</Text>
      </View>
      <View
        style={{
          flex: 1.5,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 2,
        }}
      >
        <Text style={{ textAlign: "center" }}>Total</Text>
      </View>
      <View style={{ flex: 4.5, padding: 2 }}>
        <Text style={{ textAlign: "center" }}>
          Nature and Quantity of Goods
        </Text>
      </View>
    </View>
  );
};

export default TableHeaderRow;
