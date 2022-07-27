// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// export default function App() {

//   return (
//     <View style={styles.container}>
//       <Image
//           source={require("./assets/dice_1.png")}  
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const dice = {
//   1: require("./assets/dice_1.png"),
//   2: require("./assets/dice_2.png"),
//   3: require("./assets/dice_3.png"),
//   4: require("./assets/dice_4.png"),
//   5: require("./assets/dice_5.png"),
//   6: require("./assets/dice_6.png")
// }

// export default function App() {

//   return (
//     <View style={styles.container}>
//       <Image
//           source={dice["1"]}
//           style={{
//             width: 128,
//             height: 128
//           }}  
//       />
//         <Image
//           source={dice["6"]}
//           style={{
//             width: 128,
//             height: 128,
//           }}
//         />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const dice = {
//   1: require("./assets/dice_1.png"),
//   2: require("./assets/dice_2.png"),
//   3: require("./assets/dice_3.png"),
//   4: require("./assets/dice_4.png"),
//   5: require("./assets/dice_5.png"),
//   6: require("./assets/dice_6.png")
// }

// export default function App() {

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row"
//         }}
//       >
//       <Image
//           source={dice["1"]}
//           style={{
//             width: 128,
//             height: 128, 
//           }}  
//       />
//         <Image
//           source={dice["6"]}
//           style={{
//             width: 128,
//             height: 128,
//             marginStart: 20,
//           }}
//         />
//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const dice = {
//   1: require("./assets/dice_1.png"),
//   2: require("./assets/dice_2.png"),
//   3: require("./assets/dice_3.png"),
//   4: require("./assets/dice_4.png"),
//   5: require("./assets/dice_5.png"),
//   6: require("./assets/dice_6.png")
// }

// export default function App() {

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row"
//         }}
//       >
//       <Image
//           source={dice["1"]}
//           style={{
//             width: 128,
//             height: 128, 
//           }}  
//       />
//         <Image
//           source={dice["6"]}
//           style={{
//             width: 128,
//             height: 128,
//             marginStart: 20,
//           }}
//         />
//     </View>
//     <TouchableOpacity
//       onPress={() => {}}
//       >
//         <View
//           style={{
//             backgroundColor: "#F39C12",
//             marginTop: 40,
//             paddingHorizontal: 40,
//             paddingVertical: 20,
//             borderRadius: 8
//           }}
//         >
//           <Text
//             style={{
//               color: "white"
//             }}
//           >ROLL THE DICE</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// const dice = {
//   1: require("./assets/dice_1.png"),
//   2: require("./assets/dice_2.png"),
//   3: require("./assets/dice_3.png"),
//   4: require("./assets/dice_4.png"),
//   5: require("./assets/dice_5.png"),
//   6: require("./assets/dice_6.png")
// }

// export default function App() {

//     function rollTheDice(){
//       // const dice1Random = (Math.floor(Math.random()* 6 + 1) ).toString();
//       // console.log(dice1Random);

//       const dice1Random = (Math.floor(Math.random()* 6 + 1) ).toString();
//       const dice2Random = (Math.floor(Math.random()* 6 + 1) ).toString();
//       console.log(`${dice1Random} - ${dice2Random}`);
//     }

//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row"
//         }}
//       >
//       <Image
//           source={dice["1"]}
//           style={{
//             width: 128,
//             height: 128, 
//           }}  
//       />
//         <Image
//           source={dice["6"]}
//           style={{
//             width: 128,
//             height: 128,
//             marginStart: 20,
//           }}
//         />
//     </View>
//     <TouchableOpacity
//       onPress={rollTheDice}
//       >
//         <View
//           style={{
//             backgroundColor: "#F39C12",
//             marginTop: 40,
//             paddingHorizontal: 40,
//             paddingVertical: 20,
//             borderRadius: 8
//           }}
//         >
//           <Text
//             style={{
//               color: "white"
//             }}
//           >ROLL THE DICE</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const dice = {
  1: require("./assets/dice_1.png"),
  2: require("./assets/dice_2.png"),
  3: require("./assets/dice_3.png"),
  4: require("./assets/dice_4.png"),
  5: require("./assets/dice_5.png"),
  6: require("./assets/dice_6.png")
}

export default function App() {

  const [dice1, setDice1] = useState("1")
  const [dice2, setDice2] = useState("4")
  const [dice3, setDice3] = useState("3")

  function rollTheDice() {

    const dice1Random = (Math.floor(Math.random()* 6 + 1) ).toString();
    const dice2Random = (Math.floor(Math.random()* 6 + 1) ).toString();
    const dice3Random = (Math.floor(Math.random()* 6 + 1) ).toString();

    setDice1(dice1Random)
    setDice2(dice2Random)
    setDice3(dice3Random)
  }
  const d1=parseInt(dice1);
  const d2=parseInt(dice2);
  const d3=parseInt(dice3);

 const sum = d1+d2+d3;
 const dices = dice1+' '+dice2+' '+dice3 
 console.log(dices)
 console.log(sum);
  return (
    <View style={styles.container}>
      
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <Image
          source={dice[dice1]}
          style={{
            width: 110,
            height: 110
          }}
        />

        <Image
          source={dice[dice2]}
          style={{
            width: 110,
            height: 110,
            marginStart: 20
          }}
        />
           <Image
          source={dice[dice3]}
          style={{
            width: 110,
            height: 110,
            marginStart: 20
          }}
        />
      </View>


      <TouchableOpacity
      onPress={rollTheDice}
      >
        <View
          style={{
            backgroundColor: "#F39C12",
            marginTop: 40,
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 8
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >ROLL THE DICE</Text>
        
        </View>
      </TouchableOpacity>
      <Text
            style={{
              marginTop: 40,
              color: "Blue"
            }}
          >Total sum  </Text>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});