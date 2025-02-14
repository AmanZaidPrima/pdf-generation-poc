import React from "react";
import { Text, View } from "@react-pdf/renderer";

const ChargesRow = ({ firstCol, secondCol, thirdCol, forthCol, fifthCol }) => {
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
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 6 }}>{firstCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 6 }}>{secondCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 6 }}>{thirdCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 6 }}>{forthCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 4,
        }}
      >
        <Text style={{ fontSize: 6 }}>{fifthCol}</Text>
      </View>
    </View>
  );
};

export default ChargesRow;
