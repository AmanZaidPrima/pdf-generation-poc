import { Text, View } from "@react-pdf/renderer";
import React from "react";
import Trapezoid from "./Trapezoid";

const AirportOfDestination = ({
  airportOfDestination = "",
  flightNo = "",
  date = "",
  styles = {},
}) => {
  return (
    <View
      style={{ borderTop: "1px solid black", minHeight: "30px", ...styles }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 0.4,
            borderRight: "1px solid black",
            minHeight: "30px",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "2px 1px",
          }}
        >
          <Text>Airport of Destination</Text>
          <Text>{airportOfDestination}</Text>
        </View>
        <View
          style={{
            flex: 0.6,
            flexDirection: "column",
          }}
        >
          <View>
            <View style={{ marginLeft: "20px", marginRight: "20px" }}>
              <Trapezoid text={"Requested Flight / Date"} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                borderRight: "1px solid black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{flightNo}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AirportOfDestination;
