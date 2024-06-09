/////////////////// _React Component Development_ ///////////////////

import React from "react";

/////////////////// React Create Element ///////////////////

// import React from "react";

// function HelloReact() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "⚛ Hello React Create Element..!")
//   );
// }

/////////////////// React JSX Fragment Element ///////////////////

// function HelloReact() {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>Customer Details</h1>
//       </div>
//       <hr />

//       <table>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//         </tr>
//         <tr>
//           <td>John</td>
//           <td>Doe</td>
//           <td>
//             <a href="mailto:John@gmail.com">John@gmail.com</a>
//           </td>
//         </tr>
//       </table>
//     </React.Fragment>
//   );
// }

/////////////////// React Empty JSX Fragment ///////////////////

// function HelloReact() {
//   return (
//     <>
//       <div>
//         <h1>Customer Details</h1>
//       </div>
//       <hr />
//       <table>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//         </tr>
//         <tr>
//           <td>John</td>
//           <td>Doe</td>
//           <td>
//             <a href="mailto:John@gmail.com">mailto:John@gmail.com</a>
//           </td>
//         </tr>
//       </table>
//     </>
//   );
// }

/////////////////// React Component Element ///////////////////

// function CustomerManager() {
//   return (
//     <div>
//       <Customer />
//       <Address />
//       <Salary />
//     </div>
//   );
// }

// function Customer() {
//   return <h1>Customer Details</h1>;
// }

// const Address = () => <h2>Address : Colombo</h2>;
// const Salary = () => <h2>Salary : 800,000</h2>;

/////////////////// React Props Element ///////////////////

function CustomerManager() {}

export default CustomerManager;
