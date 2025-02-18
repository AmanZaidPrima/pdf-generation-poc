import { Text, View } from "@react-pdf/renderer";
import React from "react";

const Agreement = () => {
  return (
    <>
      <View style={{ borderTop: "1px solid black", padding: "1px" }}>
        <Text style={{ fontSize: 6 }}>
          Copies 1, 2, and 3 of this Air Waybill are originals and have the same
          validity
        </Text>
      </View>
      <View
        style={{ borderTop: "1px solid black", padding: "1px", flexGrow: 1 }}
      >
        <Text style={{ fontSize: 6 }}>
          It is agreed that the goods described herein are accepted in apparent
          good order and condition (except as noted) for carriage SUBJECT TO THE
          CONDITIONS OF CONTRACT ON THE REVERSE HEREOF. ALL GOODS MAY BE CARRIED
          BY ANY OTHER MEANS INCLUDING ROAD OR ANY OTHER CARRIER UNLESS SPECIFIC
          CONTRARY INSTRUCTIONS ARE GIVEN HEREON BY THE SHIPPER, AND SHIPPER
          AGREES THAT THE SHIPMENT MAY BE CARRIED VIA INTERMEDIATE STOPPING
          PLACES WHICH THE CARRIER DEEMS APPROPRIATE. THE SHIPPER'S ATTENTION IS
          DRAWN TO THE NOTICE CONCERNING CARRIER'S LIMITATION OF LIABILITY.
          Shipper may increase such limitation of liability by declaring a
          higher value for carriage and paying a supplemental charge if
          required.
        </Text>
      </View>
    </>
  );
};

export default Agreement;
