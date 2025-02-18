import { Text, View } from "@react-pdf/renderer";
import React from "react";

const ShipperCertifies = () => {
  return (
    <View
      style={{
        borderTop: "1px solid black",
        borderRight: "1px solid black",
        flex: 1,
      }}
    >
      <Text>
        The shipper certifies that the particulars on the face hereof are
        correct and agrees to the CONDITIONS ON THE REVERSE HEREOF, accepts the
        carrier's liability is limited as stated on the reverse hereof and
        accepts such value unless a higher value for carriage is declared on the
        face of hereof subject to an additional charge and that insofar as any
        part of the consignment contains dangerous goods (hazardous materials)
        such part is properly described by name and is in proper condition for
        carriage by air according to applicable national government regulations
        and for international shipments, the current International Air Transport
        Association's Dangerous Goods Regulations.
      </Text>
    </View>
  );
};

export default ShipperCertifies;
