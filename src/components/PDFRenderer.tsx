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
import AirportOfDestination from "./mawb/AirportOfDestination";
import IssuedBy from "./mawb/IssuedBy";
import Agreement from "./mawb/Agreement";
import AccountInfo from "./mawb/AccountInfo";
import DeclaredValues from "./mawb/DeclaredValues";
import Insurance from "./mawb/Insurance";
import HandlingInfo from "./mawb/HandlingInfo";
import TableFooterRow from "./mawb/TableFooterRow";

// Styles for PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 10,
  },
  borderTop: {
    borderTop: "1px solid black",
  },
});

// PDF Document Component
const InvoiceDocument = ({ barcode }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PageStartRow leftText="807 | KUL | 11223590" rightText="807-11223590" />

      <View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              border: "1px solid black",
              borderRight: 0,
            }}
          >
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
              styles={{ borderTop: "1px solid black" }}
            />
            <IssuingCarriersAgentNameAndCity agentNameAndCity="99Speed LGK LGK" />
            <AgentInfo agentIATACode="1234567" agentAccountNo="100223" />
            <AirportOfDeparture airportOfDeparture="KUL - KUALA LUMPUR INTL" />
            <RoutingAndDestination
              styles={{ borderTop: "1px solid black", minHeight: "40px" }}
            />
            <AirportOfDestination
              airportOfDestination="SIN - SINGAPORE CHANGI APT"
              flightNo="AK721"
              date="12/12/2024"
            />
          </View>

          <View style={{ flex: 1, border: "1px solid black" }}>
            <IssuedBy airWaybill="AIR CONSIGNMENT NOTE" issuedby="AirAsia" />
            <Agreement />
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

        <View
          style={{
            borderLeft: "1px solid black ",
            borderRight: "1px solid black",
          }}
        >
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
              natureAndQuantity={
                "Long.. nature and quantity text lorem some more text more text and more text and even more text"
              }
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
            <TableFooterRow
              totalNoOfPieces="20"
              totalGrossWeight="1000"
              totalOfTotal="5000"
            />
          </View>
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
