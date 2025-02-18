import React, { useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import TableMainRow from "./mawb/TableMainRow";
import TableHeaderRow from "./mawb/TableHeaderRow";
import ChargesRow from "./mawb/ChargesRow";
import NameAddress from "./mawb/NameAndAddress";
import PageStartRow from "./mawb/PageStartRow";
import IssuingCarriersAgentNameAndCity from "./mawb/IssuingCarriersAgentNameAndCity";
import AgentInfo from "./mawb/AgentInfo";
import AirportOfDeparture from "./mawb/AirportOfDeparture";
import RoutingAndDestination from "./mawb/RoutingAndDestination";
import AirportOfDestination from "./mawb/AirportOfDestination";
import IssuedBy from "./mawb/IssuedBy";
import Agreement from "./mawb/Agreement";
import AccountInfo from "./mawb/AccountInfo";
import DeclaredValues from "./mawb/DeclaredValues";
import Insurance from "./mawb/Insurance";
import HandlingInfo from "./mawb/HandlingInfo";
import TableFooterRow from "./mawb/TableFooterRow";
import WeightCharges from "./mawb/WeightCharges";
import ChargesTrapezoids from "./mawb/ChargesTrapezoids";
import GCOD from "./mawb/GCOD";
import ShipperCertifies from "./mawb/ShipperCertifies";
import TwoTrapezoids from "./mawb/TwoTrapezoids";
import ChargesAtDestination from "./mawb/ChargesAtDestination";
import SignatureOfIssuingCarrier from "./mawb/SignatureOfIssuingCarrier";
import TotalCollectAndBarCode from "./mawb/TotalCollectAndBarCode";
import PageEndRow from "./mawb/PageEndRow";

// PDF Document Component
const InvoiceDocument = () => {
  const arr = Array(0).fill("dummy");

  return (
    <Document>
      <Page size="A4" style={{ padding: 10 }}>
        <View
          style={{
            minHeight: "100%",
            flexDirection: "column",
            fontSize: 7,
          }}
        >
          <PageStartRow
            leftText="807 | KUL | 11223590"
            rightText={`807-11223590`}
          />

          <View
            style={{
              flexGrow: 2,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                border: "1px solid black",
                borderRight: 0,
                borderBottom: 0,
              }}
            >
              <NameAddress
                type="shipper"
                name="TEST TESTA TESTC"
                address="Malaysia"
                accountNumber="100223"
                id=""
              />
              <NameAddress
                type="consignee"
                name="NO. 5-2, JALAN PUTRA MAHKOTA 7/88, SEKSYEN 7, PUTRA HEIGHTS"
                address="47550 SUBANG JAYA, SELANGOR DARUL EHSAN, MALAYSIA"
                accountNumber="100029"
                id=""
                styles={{ borderTop: "1px solid black" }}
              />
              <IssuingCarriersAgentNameAndCity agentNameAndCity="99Speed LGK LGK" />
            </View>
            <View
              style={{
                flex: 1,
                border: "1px solid black",
                borderBottom: 0,
              }}
            >
              <IssuedBy airWaybill="AIR CONSIGNMENT NOTE" issuedby="AirAsia" />
              <Agreement />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                border: "1px solid black",
                borderRight: 0,
              }}
            >
              <AgentInfo agentIATACode="1234567" agentAccountNo="100223" />
              <AirportOfDeparture airportOfDeparture="KUL - KUALA LUMPUR INTL" />
              <RoutingAndDestination
                styles={{ borderTop: "1px solid black" }}
              />
              <AirportOfDestination
                airportOfDestination="SIN - SINGAPORE CHANGI APT"
                flightNo="AK721"
                date="12/12/2024"
              />
            </View>
            <View style={{ flex: 1, border: "1px solid black" }}>
              <AccountInfo accountInformation="" />
              <DeclaredValues
                currency="MYR"
                chargesCode="PX"
                weightValuePrepaid="XX"
                weightValueCollect=""
                otherChargesPrepaid="XX"
                otherChargesCollect=""
                declaredValueCarriage="NVD"
                declaredValueCustoms="NVC"
              />
              <Insurance amountOfInsurance="XXX" />
            </View>
          </View>

          <HandlingInfo handlingInfo="SHC: Fruit, vegetables" />

          {/* Table */}
          <View style={{ flexGrow: 1, border: "1px solid black" }}>
            <TableHeaderRow />
            <TableMainRow style={{ flexGrow: 1 }} />
            <TableMainRow
              noOfPieces={"16"}
              grossWeight={"600"}
              unit={"K"}
              rateClass={"Q"}
              commodityItemNo={"0001"}
              chargeableWeight={"600"}
              rate={"5"}
              total={"3000"}
              natureAndQuantity={
                "Long.. nature and quantity text lorem some more text more text and more text and even more text"
              }
            />
            {arr.map((_, idx) => (
              <TableMainRow
                noOfPieces={"16"}
                grossWeight={"600"}
                unit={"K"}
                rateClass={"Q"}
                commodityItemNo={"0001"}
                chargeableWeight={"600"}
                rate={"5"}
                total={"3000"}
                natureAndQuantity={"Long.. nature and quantity text"}
                key={idx}
              />
            ))}
            <TableMainRow style={{ flexGrow: 1 }} />
            <TableFooterRow
              totalNoOfPieces="20"
              totalGrossWeight="1000"
              totalOfTotal="5000"
            />
          </View>

          <View
            style={{
              // flexGrow: 1,
              flexDirection: "row",
              borderTop: "1px solid black",
              marginTop: "-1px",
              borderBottom: "1px solid black",
              marginBottom: "-1px",
            }}
            wrap={false}
          >
            <View
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                flex: 1,
              }}
            >
              <WeightCharges prepaid="5000.00" collect="5000.00" />
              <ChargesTrapezoids chargeName="Valuation charges" charge="0.00" />
              <ChargesTrapezoids
                chargeName="Tax"
                charge="0.00"
                trapezoidMargins="110px"
              />
            </View>
            <View style={{ flex: 1 }}>
              <ChargesRow
                firstCol={"P-UP Zone"}
                secondCol={"PICKUP CHARGES"}
                thirdCol={"ORIGIN ADVANCES CHANGES"}
                forthCol={"DESC OF ORIGIN ADVANCE"}
                fifthCol={"ITEMS PREPAID"}
              />
              <ChargesRow
                firstCol={""}
                secondCol={""}
                thirdCol={""}
                forthCol={""}
                fifthCol={""}
              />
              <ChargesRow
                firstCol={"DEL ZONE"}
                secondCol={"DELIVERY CHARGES"}
                thirdCol={"DEST ADVANCE CHARGES"}
                forthCol={"DESC OF DEST ADVANCE"}
                fifthCol={"ITEMS COLLECT"}
              />
              <ChargesRow
                firstCol={""}
                secondCol={""}
                thirdCol={""}
                forthCol={""}
                fifthCol={""}
              />
              <View style={{ padding: "4px", borderRight: "1px solid black" }}>
                <Text style={{ fontSize: 8 }}>Other charges</Text>
                <Text style={{ fontSize: 8 }}>AW 9.0</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              // flexGrow: 1,
              flexDirection: "row",
              borderBottom: "1px solid black",
              marginBottom: "-1px",
            }}
            wrap={false}
          >
            <View
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <ChargesTrapezoids
                chargeName="Total other changes Due agent"
                charge="0.00"
              />
              <ChargesTrapezoids
                chargeName="Total other changes Due carrier"
                charge="0.00"
              />
              <GCOD />
            </View>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  padding: "4px",
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                }}
              >
                <Text></Text>
              </View>
              <ShipperCertifies />
              <View
                style={{
                  borderTop: "1px solid black",
                  borderRight: "1px solid black",
                  padding: "2",
                  minHeight: "30px",
                }}
              >
                <Text style={{ marginTop: "auto", textAlign: "center" }}>
                  Signature of Shipper or his Agent
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              // flexGrow: 1,
              flexDirection: "row",
            }}
            key={"random"}
            wrap={false}
          >
            <View
              style={{
                borderLeft: "1px solid black",
                borderRight: "1px solid black",
                borderBottom: "1px solid black",
                flex: 1,
                flexDirection: "column",
              }}
            >
              <TwoTrapezoids
                firstColName="Total Prepaid"
                firstColValue="5459"
                secondColName="Total Collect"
              />
              <TwoTrapezoids
                firstColName="Currency Conversion Rates"
                firstColValue="5459"
                secondColName="Total Collect in Dest. Currency"
                secondColValue="MYR"
              />
              <ChargesAtDestination changes="MYR" />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >
              <SignatureOfIssuingCarrier date="05/07/2022" place="KUL" />
              <TotalCollectAndBarCode mawbcode="807-66679281" />
            </View>
          </View>

          <PageEndRow />
        </View>
      </Page>
    </Document>
  );
};

// Main Component
export default function Renderer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Invoice Preview</h1>

      <PDFViewer width="100%" height="1000">
        <InvoiceDocument />
      </PDFViewer>
    </div>
  );
}
