import { Image, Text, View } from "@react-pdf/renderer";
import React from "react";

const IssuedBy = ({ issuedby = "", airWaybill = "" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "5px",
        flexGrow: 1,
      }}
    >
      <View
        style={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "2px",
        }}
      >
        <View style={{ marginTop: "10px" }}>
          <Text style={{ fontSize: 7 }}>Not negotiable</Text>
          <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}>
            Air Waybill
          </Text>
          <Text style={{ fontSize: 7 }}>{airWaybill}</Text>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold" }}>
            Issued by
          </Text>
          <Text style={{ fontSize: 7 }}>{issuedby}</Text>
        </View>
      </View>

      <Image
        style={{ width: 50, height: 50 }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png"
      />
    </View>
  );
};

export default IssuedBy;
