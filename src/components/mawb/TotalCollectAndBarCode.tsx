import { Image, Text, View } from "@react-pdf/renderer";
import bwipjs from "bwip-js";
import React, { useEffect, useState } from "react";
import Trapezoid from "./Trapezoid";

const TotalCollectAndBarCode = ({
  totalCollectCharges = "",
  mawbcode = "",
}) => {
  const [barcode, setBarcode] = useState(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      bwipjs.toCanvas(canvas, {
        bcid: "code128", // Barcode type
        text: mawbcode, // Your barcode text
        scale: 3,
        height: 10,
      });

      setBarcode(canvas.toDataURL("image/png"));
    } catch (error) {
      console.error("Barcode generation error:", error);
    }
  }, []);

  return (
    <View style={{ flexGrow: 1, flexDirection: "row" }}>
      <View
        style={{
          flex: 1,
          borderRight: "1px solid black",
          borderBottom: "1px solid black",
        }}
      >
        <View style={{ marginLeft: "20px", marginRight: "40px" }}>
          <Trapezoid text={"Total Collect Charges"} />
        </View>
        <View
          style={{
            padding: "6px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{totalCollectCharges}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ marginBottom: "1px" }}>{mawbcode}</Text>
          {barcode && (
            <Image src={barcode} style={{ width: 100, height: 15 }} />
          )}
        </View>
      </View>
    </View>
  );
};

export default TotalCollectAndBarCode;
