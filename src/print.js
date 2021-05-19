// import React from "react";


// import {
//   Container,
//   Table,
//   TableContainer,
//   TableHead,
//   TableCell,
//   TableRow,
//   TableBody,
//   Paper,
//   Typography,
// } from "@material-ui/core";

// import { Col, Divider, Row } from "antd";

// export class ComponentToPrint extends React.PureComponent {
//   render() {
//     return (
//       <Container maxWidth="sm">
//         <Paper>
//           <div style={{ padding: 20 }}>
//             <Col>
//               <Row>
//                 <Divider>Invoice</Divider>
//               </Row>
//             </Col>

//             <Row gutter={240} style={{ marginTop: 32 }}>
//               <Col span={8}>
//                 <h3>Eco Haya</h3>
//                 <div>#944/945, 4th Cross, 9th Main,</div>
//                 <div>SBI Bank,</div>
//                 <div>NILGIRIS HIMALAYAS,</div>
//                 <div>CHENNAI - 600100</div>
//               </Col>
//               <Col span={8} offset={8}>
//                 <table>
//                   <tr>
//                     <th>Invoice # :</th>
//                     <td>1</td>
//                   </tr>
//                   <tr>
//                     <th>Invoice Date :</th>
//                     <td>14-05-2021</td>
//                   </tr>
//                   <tr>
//                     <th>Due Date :</th>
//                     <td>14-05-2021</td>
//                   </tr>
//                 </table>
//               </Col>
//             </Row>

//             <div className={styles.bigblue}>
//               <div>
//                 Bill To: <strong>{person.name.first}</strong>
//               </div>
//               <div>{person.name.first}</div>
//               <div>{person.name.first}</div>
//               <div>{person.name.first}</div>
//             </div>
//           </div>

//           <TableContainer component={Paper}>
//             <Table aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Item Name</TableCell>
//                   <TableCell align="right">Quantity</TableCell>
//                   <TableCell align="right">Amount</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {this.props.checkoutPdt.map((row) => (
//                   <TableRow key={row.title}>
//                     <TableCell component="th" scope="row">
//                       {row.title}
//                     </TableCell>
//                     <TableCell align="right">{row.qty}</TableCell>
//                     <TableCell align="right">
//                       {parseInt(row.amount) * row.qty}
//                     </TableCell>
//                     <TableCell align="right"></TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           <div className={styles.total}>
//             <h1>
//               Total:
//             </h1>
//             <h1 style={{paddingLeft : "30px"}}>
//             totalPriceCount
//             </h1>
//           </div>
//         </Paper>
//       </Container>
//     );
//   }
// }
