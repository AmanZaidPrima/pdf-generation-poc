import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Styles for PDF
const styles = StyleSheet.create({
  trapezoidContainer: {
    position: "relative",
    width: "100%",
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "8px",
    marginRight: "8px",
  },
  trapezoid: {
    width: "100%",
    height: 15,
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
  },
  sideBorderLeft: {
    position: "absolute",
    top: 0,
    left: -5,
    width: 1,
    height: "100%",
    backgroundColor: "black",
    transform: "skewX(30deg)",
  },
  sideBorderRight: {
    position: "absolute",
    top: 0,
    right: -5,
    width: 1,
    height: "100%",
    backgroundColor: "black",
    transform: "skewX(-30deg)",
  },
  text: {
    fontSize: 6,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Trapezoid = ({ text = "" }) => {
  return (
    <View style={styles.trapezoidContainer}>
      <View style={styles.trapezoid}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.sideBorderLeft} />
      <View style={styles.sideBorderRight} />
    </View>
  );
};

export default Trapezoid;
