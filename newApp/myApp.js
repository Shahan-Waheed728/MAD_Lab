// // // import React from 'react';
// // // import {StyleSheet,View} from 'react-native';

// // // const Flex = () => {
// // //     return (
// // //         <View
// // //         style={[
// // //             styles.container,
// // //             {
// // //                 flexDirection : 'column',
// // //             }
// // //         ]}>
// // //             <View style={{flex: 1, backgroundColor: 'red'}} />
// // //             <View style={{flex: 2, backgroundColor: 'orange'}} />
// // //             <View style={{flex: 3, backgroundColor: 'green'}} />
// // //         </View>
// // //     );
        

// // //     };


// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 20,
// // //   },
// // // });

// // // export default Flex;

// // import React from 'react';
// // import {StyleSheet, View} from 'react-native';

// // const Flex = () => {
// //   return (
// //     <View
// //       style={[
// //         styles.container,
// //         {
// //           // Try setting `flexDirection` to `"row"`.
// //           flexDirection: 'column',
// //         },
// //       ]}>
// //       <View style={{flex: 1, backgroundColor: 'red'}} />
// //       <View style={{flex: 2, backgroundColor: 'darkorange'}} />
// //       <View style={{flex: 3, backgroundColor: 'green'}} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// // });



// import React from "react";

// const leads = [
//   { id: 1, company: "ABC Ltd", email: "contact@abc.com", source: "Google Maps" },
//   { id: 2, company: "XYZ Inc", email: "info@xyz.com", source: "Manta" },
// ];

// export default function Dashboard() {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Lead Dashboard</h1>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-3 text-left">Company</th>
//             <th className="p-3 text-left">Email</th>
//             <th className="p-3 text-left">Source</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead.id} className="border-b hover:bg-gray-50">
//               <td className="p-3">{lead.company}</td>
//               <td className="p-3">{lead.email}</td>
//               <td className="p-3">{lead.source}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
//         Export CSV
//       </button>
//     </div>
//   );
// }
