import React from "react";
import { Text, View } from "@react-pdf/renderer";

const ChargesRow = ({
  firstCol = "",
  secondCol = "",
  thirdCol = "",
  forthCol = "",
  fifthCol = "",
}) => {
  return (
    <View
      style={{
        flexGrow: 1,
        flexDirection: "row",
        borderBottom: "1px solid black",
        fontSize: 6,
      }}
    >
      <View
        style={{
          flex: 1,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 1,
          minHeight: "10px",
        }}
      >
        <Text>{firstCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 1,
          minHeight: "10px",
        }}
      >
        <Text>{secondCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 1,
          minHeight: "10px",
        }}
      >
        <Text>{thirdCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 1,
          minHeight: "10px",
        }}
      >
        <Text>{forthCol}</Text>
      </View>
      <View
        style={{
          flex: 1.4,
          borderRightWidth: 1,
          borderColor: "black",
          padding: 1,
          minHeight: "10px",
        }}
      >
        <Text>{fifthCol}</Text>
      </View>
    </View>
  );
};

export default ChargesRow;
