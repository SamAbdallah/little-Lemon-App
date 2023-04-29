import React from 'react';
import { Text, StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/themed';

function Home({ Name, Email }) {
  // const l=["Bruschetta.png","Greek salad.png","Grilled fish.png","Lemon dessert.png","Pasta.png"]
  // console.log(l[Math.floor(Math.random() * l.length)])
  const [image, setImage] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.menu);
      });
  }, []);

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const IMAGE = await AsyncStorage.getItem('image');
        if (IMAGE !== null) {
          setImage(IMAGE);
        }
      } catch (e) {
        console.log(e);
      }
    };
    retrieveData();
  }, []);

  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../assets/images/Logo.png')} resizeMode="contain" />
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ height: 100, marginLeft: 20, width: 50, borderRadius: 10, flex: 0.4 }}
          />
        ) : (
          <View style={styles.dummy}>
            <Text>
              {Name[0]}
              {Name[1]}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.intro}>
        <Text style={styles.title}>Little Lemon</Text>
        <Text style={styles.location}>Chicago</Text>

        <View style={styles.data}>
          <Text style={styles.paragraph}>
            We are a family owned mediterranean restaurant,focused on traditional recipes served with a modern twist
          </Text>
          <Image style={styles.image2} source={require('../assets/images/Grilled fish.png')} resizeMode="contain" />
        </View>

        <Icon name="search" size={30} color="black" />
      </View>
      <Text style={styles.Order}>Order For Delivery!</Text>

      <View style={styles.categroy}>
        <Button title="Starters" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
        <Button title="Main" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
        <Button title="Desserts" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
        <Button title="Drinks" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', margin: 10 }} />

      <FlatList
        style={styles.list}    
        data={data} 
        renderItem={({ item }) => (
          <View style={styles.ItemContainer}>
            <View style={styles.desc}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description1}>{item.description}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
            </View>
            <Image source={require("../assets/images/Bruschetta.png")} style={styles.image2}/>

          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  name:{
    fontSize:15,
    fontWeight:'bold'

  },
  description1:{
    marginTop:5,
    color:'grey'

  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flex: 0.2,
    marginBottom:20,
    marginTop:30,
  },
  image: {
    flex: 0.5,
    width: 150,
    marginLeft:50,
    marginRight:30
  }, 
  image2: {
    flex: 0.4,
    borderRadius:10,
    height:130 ,
    marginTop:-20,
    marginLeft:30
  },
  price:{
    marginTop:10,
    fontWeight:'bold',
  },
  dummy: {
    backgroundColor: 'gold',
    borderRadius: 20,
    height: 50,
    padding: 10,
    alignItems: 'center'
  },
  intro: {
    marginTop:20,
    flex:0.5,
    height:280,
    display:'flex',
    backgroundColor: 'darkcyan',
    padding: 10,
    display: 'flex',
  },
  title:{
    color:'gold',
    fontSize:30,
    fontWeight:'bold'
  },
  location:{
    marginBottom:10,
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  paragraph:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    flex: 0.6,
    marginRight:10,

  },
  data:{
    display:'flex',
    flexDirection:'row',
    flex: 1
  },
  Order:{
    fontWeight:'bold',
    margin:20,
    fontSize:30
  },
  categroy:{
    display:'flex',
    flexDirection:'row',
    flex:0.3
  },
  buttons:{
    backgroundColor:'grey',
    margin:10,
    borderRadius:20,
  },
  list:{
    flex:0.1
  },
  ItemContainer:{
    padding:10,
    marginBottom:20,
    display:'flex',
    flexDirection:'row'
  },
  desc:{
    flex:0.7
  }


})

export default Home;
// import React from 'react';
// import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
// import { useEffect, useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Button } from '@rneui/themed';

// function Home({ Name, Email }) {
//   const [image, setImage] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data.menu);
//       });
//   }, []);

//   useEffect(() => {
//     const retrieveData = async () => {
//       try {
//         const IMAGE = await AsyncStorage.getItem('image');
//         if (IMAGE !== null) {
//           setImage(IMAGE);
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     retrieveData();
//   }, []);

  
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image style={styles.image} source={require('../assets/images/Logo.png')} resizeMode="contain" />
//         {image ? (
//           <Image
//             source={{ uri: image }}
//             style={{ height: 100, marginLeft: 20, width: 50, borderRadius: 10, flex: 0.4 }}
//           />
//         ) : (
//           <View style={styles.dummy}>
//             <Text>
//               {Name[0]}
//               {Name[1]}
//             </Text>
//           </View>
//         )}
//       </View>

//       <View style={styles.intro}>
//         <Text style={styles.title}>Little Lemon</Text>
//         <Text style={styles.location}>Chicago</Text>

//         <View style={styles.data}>
//           <Text style={styles.paragraph}>
//             We are a family owned mediterranean restaurant,focused on traditional recipes served with a modern twist
//           </Text>
//           <Image style={styles.image2} source={require('../assets/images/Grilledfish.png')} resizeMode="contain" />
//         </View>

//         <Icon name="search" size={30} color="black" />
//       </View>
//       <Text style={styles.Order}>Order For Delivery!</Text>

//       <View style={styles.categroy}>
//         <Button title="Starters" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
//         <Button title="Main" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
//         <Button title="Desserts" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
//         <Button title="Drinks" buttonStyle={styles.buttons} titleStyle={{ color: 'black' }} />
//       </View>

//       <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey', margin: 10 }} />

//       <FlatList
//   style={styles.list}    
//   data={data}
//   renderItem={({ item }) => (
//     <View>
//       <Text>{item.name}</Text>
//       <Text>{item.description}</Text>
//     </View>
//   )}
//   keyExtractor={(item, index) => index.toString()}
//   contentContainerStyle={{ flexGrow: 1 }}

// />


// </View>

//   );
// }
