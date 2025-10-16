// import React from 'react';
// import {Text,View} from 'react-native';

// const myApp = () => {
//   return (
//   <View
//     style = {{
//       flex : 1,
//       justifyContent : 'center' ,
//       alignItems : 'center', 
//     }}>
//     <Text>Try editing me .❣</Text>
//     </View>
//   );
// };
// export default myApp


// import React from 'react';
// import {Text,View} from 'react-native';

// const newApp = () => {
//   return (
//     <View
//       style={{
//         flex : 1,
//         justifyContent : 'center',
//         alignItems : 'center',
//       }}>
//         <Text>Hello World!</Text>
//       </View>
//   );
// };

// export default newApp


// import React from 'react';
// import {View,Text,Image,ScrollView,TextInput} from 'react-native';

// const myApp = () => {
//   return (
//   <ScrollView>
//     <Text>Cat Facts</Text>
//     <View>
//       <Text>This is a cat.</Text>
//       <Image
//         source = {{
//           uri : 'https://www.shutterstock.com/image-photo/white-cat-different-color-eyes-600nw-1641420874.jpg',
          
//         }}
//         style = {{
//          width: 200, height: 200,
//         }}
//         >

//       </Image>
//     </View>
//     <TextInput
//        style={{
//         lineHeight:40,
//         borderColor : 'grey',
//         borderWidth : 2, 
//        }}
//       defaultValue = 'Write some text here'
//       >
//     </TextInput>
//   </ScrollView>
//   );
// };
// export default myApp;


// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// };

// export default App;
// import React from 'react';
// import {Text, View, Image, ScrollView, TextInput} from 'react-native';


// const Practice = () => {
//   return (
//   <ScrollView>
//     <Text>Shahan Waheed</Text>
//     <View>
//       <Text>I am learning React Native.</Text>
//       <Image
//       source = {{
//         uri : 'https://www.shutterstock.com/image-photo/turkish-white-angora-cat-living-260nw-1773271265.jpg'
//       }}
//       style = {{
//         width : 200, height : 200,
//       }}>

//       </Image>
//     </View>
//     <TextInput
//      style={{
//       lineHeight: 30,
//       borderColor : 'grey',
//       borderWidth: 2,
//      }}
//       defaultValue = 'Enter some text here'
//       />
     
//   </ScrollView>
//   );
// };

// export default Practice;

// import React from 'react';
// import {Text} from 'react-native';

// const Cat = () => {
//   const name = 'Turkish Angora';
//   return (
//     <Text>Hello, I am {name}</Text>
//   )
     
// }
// export default Cat


// //Discount Calculator App
// import React from 'react';
// import {Text,View,FlatList,StyleSheet,TextInput,Button,Modal,TouchableOpacity} from 'react-native';

// export default function Task(){
//   cosnst[originalPrice,setOriginallPrice] = useState('');
//   const[discount,setDiscount] = useState('');
//   const[youSave, setYouSave] = useState(0);
//   const[finalPrice, setFinalPrice] = useState(0);
//   const[history, setHistory] = useState([]);
//   const[modalVisible, setModalVisible] = useState(false)
// }
// const Calculator = () =>{
//   const [text, setText] = useState('');
//   return ( 
//     <View
//      style={{
//       backgroundColor: blue
//      }}>
//       <TextInput

//        placehoder="Enter Original price here"
//        defaultValue={text}
//        />
//        <TextInput
//        placehoder="Enter discount price here"/>
//        <Text style={{padding: 10, fontSize: 42}}>
//         {text
//           .split(' ')
//           .join(' ')}
//       </Text>
//     </View>
//   )
// }

// const show =() =>{
//   return(
//     <View>
//       <Text>
//         You save 
//       </Text>
//       <Text>
//         Final Price
//       </Text>
//     </View>
//   )
// }
// export default Calculator


// import React from 'react';
// import {Text} from 'react-native';
// const name = "Aizel"
// const Cat = () => {
//   return (
//     <Text>Hello, I am  {name}!</Text>
   
//   )
// }
// export default Cat;


// import React from 'react';
// import {Text} from 'react-native';
// const fullName = (
//   first_name = String,
//   middle_name = String,
//   last_name = String
// ) => {
//   return first_name + " " + middle_name + " " + last_name
// }

// const Student = () => {
//   return (
//     <Text>Hello! my name is {fullName("Malik","Shahan","Waheed")}</Text>
//   )
// };

// export default Student;

//JSX custom components
// import React from 'react';
// import {Text,TextInput,View} from 'react-native';

// const Cat = () => {
//  return(
//   <View>
//     <Text>Hello! I am...</Text>
//     <TextInput
//      style = {{
//       height: 30,
//       borderColor : 'grey',     
//       borderWidth : 1
//     }}
//      defaultValue='Name me..'/>
   
//   </View>
//  )
// };
// export default Cat;


//multiple components
// import React from 'react';
// import {Text,View,} from 'react-native';

// const Name=() =>{
//   return (
//     <Text>Hello! I am Shahan Waheed.</Text>
//   )
// }
 
// const Greetings = () =>{
//   return (
//     <View>
//     <Text>Welcome to Accept Realtity</Text>
//     <Name/>
//     <Name/>
//     <Name/>
//     </View>
//   )
// }
// export default Greetings;


//using props 
// import React from 'react';
// import {Text,View} from 'react-native';

// type NameProps = {
//   name : string;
// }

// const Name = (props : NameProps) => {
//   return (
//     <Text>Hello! I am {props.name}</Text>
//   )
// }

// const Info = () =>{
//   return(
//     <View>
//       <Text>---Welcome to Student Portal---</Text>
//       <Name name = "Shahan Waheed"/>
//       <Name name = "Sameer Khurram"/>
//       <Name name = "Aiza Khan"/>
//     </View>
//   )
// }
// export default Info;

// import React from 'react';
// import {Text,View,Image} from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//     <Image
//      source = {{
//         uri : "https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg"}}
//        style={{width: 300, height: 300}}
//       />
   
//     <Text>I am your favorite cat.</Text>
//     </View>
//   )
// }

// export default Cat;


// //working with useState
// import React ,{ useState } from "react";
// import {Text,View,Button} from 'react-native';

// type CatProps = {
//   name : string;
// }


// const Cat = (props : CatProps) => {
//   const [isHungry, setIsHungry] = useState(true);
//   return (  
//   <View>
//   <Text>I am {props.name}, and i am {isHungry? 'hungry':'full'}!</Text>
//   <Button
//     onPress = {() =>{
//       setIsHungry(false);
// }}
//       disabled = {!isHungry}
//       title = {isHungry? 'Give me some food, please!' : 'Thank you!'}
//       color={isHungry ? "#4CAF50" : "gray"} // green if hungry, gray if full
//       />
//   </View>
//   );
// };


//   const CatCafe = () =>{
//     return (
//       <>
//       <Cat name= "Aizel"/>
//       <Cat name= "Baila"/>
//       </>
 
  
//   );
// };
// export default CatCafe;


// import React from 'react';
// import {StyleSheet,TextInput} from 'react-native';
// import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';

// const textInputExample = () => {
//   const[text, onChangeText] = React.useState{'Useless Text'}; 
//   const[number, onChangeNumber] = React.useState('');

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView>
//         <TextInput
//         style = {styles.input}
//         onChangeText={onChangeText}
//         value = {text}
//         />
//         <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value = {number}
//         placeholder='useless placeholder'
//         keyboardType='numeric'
//           />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   )
// }



// //First App
// import React from 'react';
// import {Text,View} from 'react-native';

// const App = () => {
//   return (
//   <View>
//     <Text
//     style = {{fontSize : 30}}
//     >Hello React Native</Text>
//     <Text
//     style = {{fontSize : 24}}
//     >This is my first app program.</Text>
//   </View>
//   )
// }
// export default App


//basic fo view, text and button
// import React from 'react';
// import {Text,View,Button} from 'react-native';
// const App = () => {
//   return (
//     <View>
//     <Text style={{fontSize:30}}>Hello Text Component!</Text>
//     <Text style={{fontSize:20}}>Hello View Component!</Text>
//     <Text style={{fontSize:15}}>Hello Button Component!</Text>
//     <Button title="Press me"/>
//     <Button title="Next"/>
//     </View>

//   )
// }
// export default App;

//JSX code 
// import React from 'react';
// import {Text,View,Button} from 'react-native';
// const name = "Shahan Waheed";
// let age = 21;
// let email = "abc@gmail.com"
// function Sum(){
//   return 24+30
// }
// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize : 30}}>Hello, I am {name}</Text>
//       <Text style={{fontSize: 25}}>I am {age} years old.</Text>
//       <Text style={{fontSize: 20}}>My email id is : {email}</Text>
//       <Text>Sum of two numbers is : {Sum()}</Text>
//       <Button title="Press me"/>
//     </View>
//   )
// }
// export default App;

// React components
// import React from 'react';
// import {Text,View} from 'react-native';
// import UserData from './Components/UserData';

// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize : 30}}>React Components</Text>
//       <Text style={{fontSize : 25}}>User Data</Text>
//       <UserData/>
//       <Text style={{fontSize : 25}}>Student Information</Text>
//       <StudInfo/>
//     </View>
//   )
// }
// const StudInfo = () => {
//   return(
//  <View>
//   <Text>Name : Huzaifa Khan</Text>
//   <Text>Reg_no : SP23-BSE-010</Text>
//   <Text>Program : SE</Text>
//   <Text>Semester : 6th</Text>
//   <Text>GPA : 3.87</Text> 
//  </View>
//   )
// }
//  export default App;

// //Button event 
// import React from 'react';
// import {View,Text,Button} from 'react-native';


// const App = () => {
//   let num = 100;
//   const Message = (val) => {
//     num = 20;
//     console.warn(num)
//   }
//   const Alert = () =>{
//     alert("Message send successfully!")
//   }
//   return (
//     <View>
//       <Text style={{fontSize:30}}>{num}</Text>
//       <Text>Click the Press me button to show the magic.</Text>
//       <Button 
//        title = {'Press me'}
//       //  onPress={Message}
//       onPress = {() => {Message("Hello World!")}}
//        color={'green'}     
//        />
//       <Button
//       title = {'Next'}
//       color={'red'}
//       onPress={Alert}
//       />
//     </View>
//   )
// }

// export default App;

// Working with State 
// import React,{useState} from 'react';
// import {View,Text,Button} from 'react-native';

// const Result = () => {
//   let name = "Saqib Ishaq"
//   const [marks,setMarks] = useState(49)
//   const [status,setStatus] = useState('Fail')
//   function updation () {
//     setMarks(50)
//     setStatus('Pass')
//   }
//   return (
//     <View style={{padding:20}}>
//       <Text>Name : {name}</Text>
//       <Text>Marks : {marks}</Text>
//       <Text>Status : {status}</Text>
//       <Button 
//       title={'Update'}
//        onPress={updation}/>
//     </View>
//   )
// }

// export default Result;


//Question 1
// import React from 'react';
// import {View,Text,Button} from 'react-native';
//  const Movie = () => {

//     let name = 'Business Man'
//     let actor = 'Mehesh Babu'
//     function updation() {
//      alert("Movie name changed, Movie : Lagaan , Actor : Amir Khan")
//     }

//     return (
//         <View>
//             <Text style={{fontSize:35}}>My Favourite Movie</Text>
//             <Text style={{padding:10}}>Movie : {name}</Text>
//             <Text style={{padding:10}}>Actor : {actor}</Text>
//             <Button 
//             title = {'Change Movie'}
//             onPress = {updation}
//             />
//         </View>
//     )   

// }
// export default Movie;

//Question 2
// import React from 'react';
// import {View,Button} from 'react-native';

// const App = () => {
//   function Red() {
//     console.warn("You choose 'Red' color!")
//   }
//    function Green() {
//     console.warn("You choose 'Green' color!")
//   }
//    function Blue() {
//     console.warn("You choose 'Blue' color!")
//   }
//   return (
//     <View style={{margin:20}}>
//       <Button
//       title = {'Red'}
//       color={'red'} 
//       onPress={Red}  
//       />
//       <Button
//       title = {'Green'}
//       color= {'green'}
//       onPress={Green}
//       />
//       <Button
//       title = {'Blue'}      
//       color = {'blue'}
//       onPress={Blue}
//       />
//     </View>
//   )
// }
// export default App;

// //Question3
// import React from 'react';
// import {Text,View} from 'react-native';

// const App = () => {
//   function Multiply(a,b) {
//     return a * b
//   }
//   return (
//     <View>
//       <Text style={{fontSize:30}}>JSX Playground</Text>
//       <Text style={{fontSize:20}}>Product of 3 and 4 is = {Multiply(3,4)}</Text>
//     </View>
//   )
// }
// export default App;

// import React from 'react';
// import {Text,View} from 'react-native';

// const App = () =>{
//   function Info(name,age,hobby ) {
//     return "I am " + name + " and I am "+ age+ " years old, I like "+hobby;

//   }
//   return (
//     <View>
//       <Text>My Portfolio</Text>
//       <Text>{Info('Shahan Waheed',21,'Coding')}</Text>
//     </View>
//   ) 
// }
// export default App;

//Question3
// import React from 'react';
// import {Text,View} from 'react-native';
// import MyProfile from './Components/MyProfile';

// const App = () => {
//   return (
//     <View >
//       <Text style={{fontSize:30}}>User Profile</Text>
//       <MyProfile/>
//     </View>
//   )
// }
// export default App;




// import React from "react";
// import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>RideMax</Text>
//         <Text style={styles.title}>Premium Ride Service</Text>
//         <Text style={styles.subtitle}>
//           Experience luxury transportation with professional drivers
//         </Text>
//         <Button title="Book Now" color="#ff9800" onPress={() => alert("Booking...")} />
//       </View>

//       {/* About Section */}
//       <View style={styles.about}>
//         <Text style={styles.sectionTitle}>About RideMax</Text>
//         <Text style={styles.sectionText}>
//           We provide premium transportation services with a fleet of luxury
//           vehicles and experienced professional drivers committed to your safety
//           and comfort.
//         </Text>

//         {/* Feature Cards */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Safety First</Text>
//           <Text style={styles.cardText}>
//             All our vehicles undergo regular inspection and safety checks.
//           </Text>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>24/7 Service</Text>
//           <Text style={styles.cardText}>
//             Round-the-clock availability for all your travel needs.
//           </Text>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Premium Quality</Text>
//           <Text style={styles.cardText}>
//             Luxury vehicles with professional chauffeur service.
//           </Text>
//         </View>
//       </View>

//       {/* Top Drivers Section */}
//       <View style={styles.drivers}>
//         <Text style={styles.sectionTitle}>Top Drivers</Text>
//         <Text style={styles.sectionText}>
//           Meet our professional and experienced drivers
//         </Text>

//         <View style={styles.driverCard}>
//           <Text style={styles.driverName}>Michael Johnson</Text>
//           <Text>⭐ 4.9 | 5 years experience</Text>
//         </View>

//         <View style={styles.driverCard}>
//           <Text style={styles.driverName}>Sarah Williams</Text>
//           <Text>⭐ 4.8 | 6 years experience</Text>
//         </View>

//         <View style={styles.driverCard}>
//           <Text style={styles.driverName}>David Chen</Text>
//           <Text>⭐ 4.7 | 4 years experience</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//   },
//   header: {
//     backgroundColor: "#0056d2",
//     padding: 20,
//     alignItems: "center",
//   },
//   logo: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   title: {
//     color: "#fff",
//     fontSize: 26,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   subtitle: {
//     color: "#fff",
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   about: {
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   sectionText: {
//     fontSize: 15,
//     color: "#333",
//     marginBottom: 15,
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#0056d2",
//   },
//   cardText: {
//     fontSize: 14,
//     color: "#444",
//     marginTop: 5,
//   },

// });

// export default App;


// import React from "react";
// import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from "react-native";

// const App = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section with background image */}
//       <ImageBackground
//         source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small_2x/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg" }} // sample car image URL
//         style={styles.header}
//         imageStyle={{ opacity: 0.3 }} // makes the image slightly transparent
//       >
//         <Text style={styles.logo}>RideMax</Text>
//         <Text style={styles.title}>Premium Ride Service</Text>
//         <Text style={styles.subtitle}>
//           Experience luxury transportation with professional drivers
//         </Text>
//         <Button title="Book Now" color="#ff9800"  onPress={() => alert("Booking...")}  />
//       </ImageBackground>

//       {/* About Section */}
//       <View style={styles.about}>
//         <Text style={styles.sectionTitle}>About RideMax</Text>
//         <Text style={styles.sectionText}>
//           We provide premium transportation services with a fleet of luxury
//           vehicles and experienced professional drivers committed to your safety
//           and comfort.
//         </Text>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Safety First</Text>
//           <Text style={styles.cardText}>
//             All our vehicles undergo regular inspection and safety checks.
//           </Text>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>24/7 Service</Text>
//           <Text style={styles.cardText}>
//             Round-the-clock availability for all your travel needs.
//           </Text>
//         </View>

//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Premium Quality</Text>
//           <Text style={styles.cardText}>
//             Luxury vehicles with professional chauffeur service.
//           </Text>
//         </View>
//       </View>
//        {/* Top Drivers Section */}
//       <View style={styles.drivers}>
//          <Text style={styles.sectionTitle}>Top Drivers</Text>
//          <Text style={styles.sectionText}>
//            Meet our professional and experienced drivers
//          </Text>

//          <View style={styles.driverCard}>
//            <Text style={styles.driverName}>Michael Johnson</Text>
//            <Text>⭐ 4.9 | 5 years experience</Text>
//          </View>

//          <View style={styles.driverCard}>
//            <Text style={styles.driverName}>Sarah Williams</Text>
//            <Text>⭐ 4.8 | 6 years experience</Text>
//          </View>

//          <View style={styles.driverCard}>
//            <Text style={styles.driverName}>David Chen</Text>
//            <Text>⭐ 4.7 | 4 years experience</Text>
//          </View>
//        </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//   },
//   header: {
//     backgroundColor: "#0056d2",
//     padding: 30,
//     alignItems: "center",
//   },
//   logo: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   title: {
//     color: "#fff",
//     fontSize: 26,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   subtitle: {
//     color: "#fff",
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   about: {
//     padding: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   sectionText: {
//     fontSize: 15,
//     color: "#333",
//     marginBottom: 15,
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#0056d2",
//   },
//   cardText: {
//     fontSize: 14,
//     color: "#444",
//     marginTop: 5,
//   },
//     drivers: {
//     padding: 20,
//   },
//   driverCard: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 5,
//     elevation: 2,
//   },
//   driverName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 3,
//   },
// });

// export default App;



//Lab 7
// import React ,{useState} from 'react';
// import {Text,View,Button,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

// const AddRecord= () =>{
//   }
// const Search=() => {

// }
// const ClearAll=() => {

// }



// const App = () =>{
//   const [name,setName] = useState(" ")
//   const [gpa,setGPA] = useState('')
//   const [record,setRecord] = useState([])
//   return(
//   <View style={styles.container}>
//     <Text>Name:</Text>
//      <TextInput
//         style={styles.input}
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={setName} 
//      />
  
//     <Text>GPA:</Text>
//     <TextInput
//        style={styles.input}
//        placeholder="Enter GPA"
//        value={gpa}
//        onChangeText={setGPA}
//        keyboardType="numeric"
//     />    
  
//    <Button 
//        style={styles.button}
//        title="Add" 
//        onPress={AddRecord} />
//       <Button 
//        style={styles.button}
//        title="Search"
//        onPress={Search}
//   />
//       <Text >
//         Records:
//       </Text>
  
 
//   <Text>{name}</Text>
//   <Text></Text>
  
//   <Button 
//   title="Clear All" 
//   color="gray"
//    onPress={ClearAll} 
//    />
//   </View>
//   )
// }

// const styles= StyleSheet.create({
//   container:{
//     flex: 1,
//      padding: 20, 
//      marginTop: 40 
//     },
//     input:{ 
//     borderWidth: 1, 
//     padding: 5, 
//     marginVertical: 5,
//     borderRadius: 5
//     },
//     button:{
//       width:30,
//       padding:5,
//       backgroundColor:"grey"
//     }

  

// })
// export default App;






















