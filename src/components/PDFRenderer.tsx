import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import bwipjs from "bwip-js";
import { PDFViewer } from "@react-pdf/renderer";
import Trapezoid from "./mawb/Trapezoid";
import TableMainRow from "./mawb/TableMainRow";
import TableHeaderRow from "./mawb/TableHeaderRow";
import ChargesRow from "./mawb/ChargesRow";
import NameAddress from "./mawb/NameAndAddress";
import PageStartRow from "./mawb/PageStartRow";
import IssuingCarriersAgentNameAndCity from "./mawb/IssuingCarriersAgentNameAndCity";
import AgentInfo from "./mawb/AgentInfo";
import AirportOfDeparture from "./mawb/AirportOfDeparture";
import RoutingAndDestination from "./mawb/RoutingAndDestination";

// Styles for PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 10,
  },
  topText: {
    fontSize: 10,
    fontWeight: 600,
    marginBottom: 6,
  },
  container: {
    // border: "1px solid #ccc",
  },
  topTextContainer: {
    flexDirection: "row", // Enables horizontal layout
    justifyContent: "space-between", // Adjust spacing
  },
  flexRow: {
    flexDirection: "row", // Enables horizontal layout
  },
  borderTop: {
    borderTop: "1px solid black",
  },
  halfWidthColumn: {
    flex: 1,
    border: "1px solid black",
    marginRight: "-1px",
    padding: 0,
  },
  biggerCol: {
    flex: 0.6,
  },
  smallerCol: {
    flex: 0.4,
  },
  smallerColTopLeft: {
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
  },
  routingDestination: {
    borderTop: "1px solid black",
    flexDirection: "row",
  },
  column: {
    borderRight: "1px solid black",
    justifyContent: "center",
    textAlign: "center",
  },
  wideColumn: {
    flex: 3,
    borderRight: "1px solid black",
    justifyContent: "center",
  },
  flex1: { flex: "1" },
});

// PDF Document Component
const InvoiceDocument = ({ barcode }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PageStartRow leftText="807 | KUL | 11223590" rightText="807-11223590" />

      <View style={styles.container}>
        <View style={styles.flexRow}>
          <View style={styles.halfWidthColumn}>
            <NameAddress
              type="shipper"
              name="TEST TESTA TESTC"
              address="Malaysia"
              accountNumber="100223"
              id=""
              styles={{ minHeight: "80px" }}
            />
            <NameAddress
              type="consignee"
              name="NO. 5-2, JALAN PUTRA MAHKOTA 7/88, SEKSYEN 7, PUTRA HEIGHTS"
              address="47550 SUBANG JAYA, SELANGOR DARUL EHSAN, MALAYSIA"
              accountNumber="100029"
              id=""
              styles={{ borderTop: "1px solid black", minHeight: "80px" }}
            />
            <IssuingCarriersAgentNameAndCity agentNameAndCity="99Speed LGK LGK" />
            <AgentInfo agentIATACode="1234567" agentAccountNo="100223" />
            <AirportOfDeparture airportOfDeparture="KUL - KUALA LUMPUR INTL" />
            <RoutingAndDestination
              styles={{ borderTop: "1px solid black", minHeight: "40px" }}
            />

            <View style={styles.routingDestination}>
              <View style={styles.column}>
                <Text style={styles.topText}>To</Text>
                <Text style={styles.topText}>SIN</Text>
              </View>
              <View style={[styles.column, styles.flexRow, styles.flex1]}>
                <View>
                  <Text style={styles.topText}>By first </Text>
                  <Text style={styles.topText}>Carrier</Text>
                  <Text style={styles.topText}>AK</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <Trapezoid text={"Routing and destination"} />
                  </View>
                </View>
              </View>

              <View style={styles.column}>
                <Text style={styles.topText}>To</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.topText}>By</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.topText}>To</Text>
              </View>
              <View style={(styles.column, { borderRight: 0 })}>
                <Text style={styles.topText}>By</Text>
              </View>
            </View>
            <View style={styles.borderTop}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.4, borderRight: "1px solid black" }}>
                  <Text style={styles.topText}>Airport of Destination</Text>
                  <Text style={styles.topText}>SIN - SINGAPORE CHANGI APT</Text>
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
                      <Text style={styles.topText}>AK721</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={styles.topText}>19/02/2025</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.halfWidthColumn}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexGrow: 1 }}>
                <Text style={{ fontSize: 10 }}>Not negotiable</Text>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  Air Waybill
                </Text>
                <Text style={{ fontSize: 10 }}>AIR CONSIGNMENT NOTE</Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold", marginTop: 5 }}
                >
                  Issued by
                </Text>
                <Text style={{ fontSize: 10 }}>AirAsia,</Text>
              </View>

              <Image
                style={{ width: 50, height: 50 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1200px-AirAsia_New_Logo.svg.png"
              />
            </View>

            <View style={styles.borderTop}>
              <Text style={styles.topText}>
                Copies 1, 2, and 3 of this Air Waybill are originals and have
                the same validity
              </Text>
            </View>
            <View style={styles.borderTop}>
              <Text style={{ fontSize: "8px" }}>
                It is agreed that the goods described herein are accepted in
                apparent good order and condition (except as noted) for carriage
                SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE HEREOF. ALL
                GOODS MAY BE CARRIED BY ANY OTHER MEANS INCLUDING ROAD OR ANY
                OTHER CARRIER UNLESS SPECIFIC CONTRARY INSTRUCTIONS ARE GIVEN
                HEREON BY THE SHIPPER, AND SHIPPER AGREES THAT THE SHIPMENT MAY
                BE CARRIED VIA INTERMEDIATE STOPPING PLACES WHICH THE CARRIER
                DEEMS APPROPRIATE. THE SHIPPER'S ATTENTION IS DRAWN TO THE
                NOTICE CONCERNING CARRIER'S LIMITATION OF LIABILITY. Shipper may
                increase such limitation of liability by declaring a higher
                value for carriage and paying a supplemental charge if required.
              </Text>
            </View>
            <View style={[styles.borderTop, { height: "50px" }]}>
              <Text style={styles.topText}>Account Information</Text>
            </View>

            <View style={[styles.borderTop, { flexDirection: "row" }]}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ borderRight: "1px solid black" }}>
                  <Text style={{ fontSize: "8px" }}>Currency</Text>
                  <Text style={{ fontSize: "8px" }}>MYR</Text>
                </View>
                <View style={{ borderRight: "1px solid black" }}>
                  <Text style={{ fontSize: "8px" }}>Chgs</Text>
                  <Text style={{ fontSize: "8px" }}>Code</Text>
                  <Text style={{ fontSize: "8px" }}>PX</Text>
                </View>
                <View style={{ borderRight: "1px solid black" }}>
                  <View style={{ borderBottom: "1px solid black" }}>
                    <Text style={{ fontSize: "8px" }}>WT/VAL</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ borderRight: "1px solid black" }}>
                      <Text style={{ fontSize: "8px" }}>PPD</Text>
                      <Text style={{ fontSize: "8px" }}>XX</Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: "8px" }}>COLL</Text>
                      <Text style={{ fontSize: "8px" }}></Text>
                    </View>
                  </View>
                </View>
                <View style={{ borderRight: "1px solid black" }}>
                  <View style={{ borderBottom: "1px solid black" }}>
                    <Text style={{ fontSize: "8px" }}>Other</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ borderRight: "1px solid black" }}>
                      <Text style={{ fontSize: "8px" }}>PPD</Text>
                      <Text style={{ fontSize: "8px" }}>XX</Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: "8px" }}>COLL</Text>
                      <Text style={{ fontSize: "8px" }}></Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, borderRight: "1px solid black" }}>
                  <Text style={{ fontSize: "8px" }}>Declared Value for</Text>
                  <Text style={{ fontSize: "8px" }}>Carriage</Text>
                  <Text style={{ fontSize: "8px" }}> NVD</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: "8px" }}>Declared Value for</Text>
                  <Text style={{ fontSize: "8px" }}>Customs</Text>
                  <Text style={{ fontSize: "8px" }}> NVC</Text>
                </View>
              </View>
            </View>

            <View style={[styles.borderTop, { flexDirection: "row" }]}>
              <View
                style={{
                  flex: 0.3,
                  borderRight: "1px solid black",
                }}
              >
                <Text style={styles.topText}>Amount of insurance</Text>
                <Text style={styles.topText}>XXX</Text>
              </View>
              <View style={{ flex: 0.7 }}>
                <Text style={styles.topText}>
                  INSURANCE - If carrier offers insurance and such insurance is
                  requested in accordance with conditions on reverse hereof,
                  indicate amount to be insured in figures in box marked Amount.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            border: "1px solid black",
            borderTop: 0,
            marginRight: "-1px",
          }}
        >
          <View
            style={{
              position: "relative",
              height: "40px",
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Handling Information
            </Text>
            <Text style={{ fontSize: 10 }}>SHC: Fruit, vegetables</Text>
            <View
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                borderTop: "1px solid black",
                borderLeft: "1px solid black",
                width: "100px",
                padding: "2px",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                SCI
              </Text>
            </View>
          </View>
        </View>
        <View style={{ border: "1px solid black" }}>
          <TableHeaderRow />
          <TableMainRow
            noOfPieces={"16"}
            grossWeight={"600"}
            unit={"K"}
            rateClass={"Q"}
            commodityItemNo={"0001"}
            chargeableWeight={"600"}
            rate={"5"}
            total={"3000"}
            natureAndQuantity={"Long.. nature and quantity text lorem "}
          />
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
          />
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
          />
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
          />
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
          />{" "}
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
          />{" "}
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
          />{" "}
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ border: "1px solid black", flex: 1 }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Trapezoid text={"Pre paid"} />
                <Trapezoid text={"Weight Charge"} />
                <Trapezoid text={"Collect"} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    borderRight: "1px solid black",
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>5000.00</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>5000.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.borderTop}>
              <View style={{ marginLeft: "40px", marginRight: "40px" }}>
                <Trapezoid text={"Valuation charges"} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    borderRight: "1px solid black",
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>0.00</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
              </View>
            </View>
            <View style={styles.borderTop}>
              <View style={{ marginLeft: "110px", marginRight: "120px" }}>
                <Trapezoid text={"Tax"} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    borderRight: "1px solid black",
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>0.00</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
              </View>
            </View>
            <View style={styles.borderTop}>
              <View style={{ marginLeft: "40px", marginRight: "40px" }}>
                <Trapezoid text={"Total other changes Due agent"} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    borderRight: "1px solid black",
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>0.00</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
              </View>
            </View>
            <View style={styles.borderTop}>
              <View style={{ marginLeft: "40px", marginRight: "40px" }}>
                <Trapezoid text={"Total other changes Due carrier"} />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    borderRight: "1px solid black",
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>0.00</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", borderTop: "1px solid black" }}
            >
              <View style={{ flex: 1, borderRight: "1px solid black" }}>
                <View style={{ borderBottom: "1px solid black" }}>
                  <Text style={{ fontSize: 8 }}>G.COD</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 8 }}>J.RFC</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}></View>
            </View>
            <View
              style={{ flexDirection: "row", borderTop: "1px solid black" }}
            >
              <View style={{ flex: 1, borderRight: "1px solid black" }}>
                <View style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <Trapezoid text={"Total Prepaid"} />
                </View>
                <View
                  style={{
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>5459</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <Trapezoid text={"Total Collect"} />
                </View>
                <View
                  style={{
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", borderTop: "1px solid black" }}
            >
              <View style={{ flex: 1, borderRight: "1px solid black" }}>
                <View style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <Trapezoid text={"Currency Conversion Rates"} />
                </View>
                <View
                  style={{
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <Trapezoid text={"Total Collect in Dest. Currency"} />
                </View>
                <View
                  style={{
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>MYR</Text>
                </View>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", borderTop: "1px solid black" }}
            >
              <View style={{ flex: 1, borderRight: "1px solid black" }}>
                <View
                  style={{
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>
                    For Carrier Use only at Destination
                  </Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ marginLeft: "20px", marginRight: "40px" }}>
                  <Trapezoid text={"Charges at Destination"} />
                </View>
                <View
                  style={{
                    padding: "4px",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8 }}>MYR</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
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
            </View>
            <View style={{ padding: "4px", borderRight: "1px solid black" }}>
              <Text style={{ fontSize: 8 }}>Other charges</Text>
              <Text style={{ fontSize: 8 }}>AW 9.0</Text>
            </View>
            <View
              style={{
                padding: "4px",
                borderTop: "1px solid black",
                borderRight: "1px solid black",
              }}
            >
              <Text style={{ fontSize: 8 }}></Text>
            </View>
            <View
              style={{
                borderTop: "1px solid black",
                borderRight: "1px solid black",
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 8 }}>
                The shipper certifies that the particulars on the face hereof
                are correct and agrees to the CONDITIONS ON THE REVERSE HEREOF,
                accepts the carrier's liability is limited as stated on the
                reverse hereof and accepts such value unless a higher value for
                carriage is declared on the face of hereof subject to an
                additional charge and that insofar as any part of the
                consignment contains dangerous goods (hazardous materials) such
                part is properly described by name and is in proper condition
                for carriage by air according to applicable national government
                regulations and for international shipments, the current
                International Air Transport Association's Dangerous Goods
                Regulations.
              </Text>
            </View>
            <View
              style={{
                borderTop: "1px solid black",
                borderRight: "1px solid black",
              }}
            >
              <Text style={{ fontSize: 8 }}>
                Signature of Shipper or his Agent
              </Text>
            </View>
            <View
              style={{
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                height: "60px",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ margin: "0 3px", flex: 0.25 }}>
                <View
                  style={{ padding: "2px", borderBottom: "1px solid black" }}
                >
                  <Text style={{ fontSize: 8, textAlign: "center" }}>
                    05/07/2022
                  </Text>
                </View>
                <View style={{ padding: "2px" }}>
                  <Text style={{ fontSize: 8, textAlign: "center" }}>
                    EXECUTED ON
                  </Text>
                </View>
              </View>
              <View style={{ margin: "0 3px", flex: 0.15 }}>
                <View
                  style={{ padding: "2px", borderBottom: "1px solid black" }}
                >
                  <Text style={{ fontSize: 8, textAlign: "center" }}>KUL</Text>
                </View>
                <View style={{ padding: "2px" }}>
                  <Text style={{ fontSize: 8, textAlign: "center" }}>
                    {"(Place)"}
                  </Text>
                </View>
              </View>
              <View style={{ margin: "0 3px", flex: 0.6 }}>
                <View
                  style={{ padding: "2px", borderBottom: "1px solid black" }}
                >
                  <Text style={{ fontSize: 8, textAlign: "center" }}></Text>
                </View>
                <View style={{ padding: "2px" }}>
                  <Text style={{ fontSize: 8, textAlign: "center" }}>
                    Signature of Issuing Carrier or its Agent
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
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
                  <Text style={{ fontSize: 8 }}></Text>
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
                  <Text style={{ fontSize: 7, marginBottom: "2px" }}>
                    807-66679281
                  </Text>
                  {barcode && (
                    <Image src={barcode} style={{ width: 100, height: 15 }} />
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 7,
              }}
            >
              {"Original 1 (for Issuing Carrier)"}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 7 }}>
              This is a Computer Generated Air Way Bill
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

// Main Component
export default function Renderer() {
  const [barcode, setBarcode] = useState(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      bwipjs.toCanvas(canvas, {
        bcid: "code128", // Barcode type
        text: "807-66679281", // Your barcode text
        scale: 3,
        height: 10,
      });

      setBarcode(canvas.toDataURL("image/png"));
    } catch (error) {
      console.error("Barcode generation error:", error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Invoice Preview</h1>

      <PDFViewer width="100%" height="1000">
        <InvoiceDocument barcode={barcode} />
      </PDFViewer>
    </div>
  );
}
