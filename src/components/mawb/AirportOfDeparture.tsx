import { Text, View } from "@react-pdf/renderer";
import React from "react";

const AirportOfDeparture = ({ airportOfDeparture = "", styles = {} }) => {
  return (
    <View style={{ borderTop: "1px solid black", padding: "2px", ...styles }}>
      <Text style={{ fontSize: 8, marginBottom: "2px" }}>
        Airport of Departure
      </Text>
      <Text style={{ fontSize: 8 }}>{airportOfDeparture}</Text>
    </View>
  );
};

export default AirportOfDeparture;
