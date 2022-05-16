import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Input } from '@ui-kitten/components';
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{flex: 0.5}}>

    </View>
    <View style={{flex: 3, width: '90%'}}>
      <Text_location>

      </Text_location>
    </View>

    <View style={{flex: 1.5, width: '100%'}}>
      <Display_map_info>

      </Display_map_info>
    </View>

    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
      <Dist_info>

      </Dist_info>
    </View>

    <View style={{flex: 10}}>
      <Map_customize>

      </Map_customize>
    </View>
  </Layout>
);

// TODO: Get input text, pass them to the map API
const Text_location = () => (
  <>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1, width: '100%'}}>
        <InputAccessoriesShowcase label="Start Point" placeholder="Enter the start point">
        
        </InputAccessoriesShowcase>
      </View>

      <View style={{flex: 0.05}}>
      </View>
      
      <View style={{flex: 1, width: '100%'}}>
        <InputAccessoriesShowcase label="Goal Point" placeholder="Enter the goal point">
        
        </InputAccessoriesShowcase>
      </View>

    </Layout>
  </>
)

// TODO: replace [Placeholder] with real computed numbers
const Display_map_info = () => (
  <>
    <Layout style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', border: 'solid'}}>
      <View style={{flex: 1}}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%',}}>
          <View style={{flex: 1}}>
            <Text category='s1'>Bike</Text>  
          </View>
          <View style={{flex: 1}}>
            <Text>[Placeholder]</Text>  
          </View>
        </Layout>
      </View>
      
      <View style={{flex: 1}}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text category='s1'>Walk</Text>  
          </View>
          <View style={{flex: 1}}>
            <Text>[Placeholder]</Text>  
          </View>
        </Layout>
      </View>

      <View style={{flex: 1}}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text category='s1'>Public Transit</Text>  
          </View>
          <View style={{flex: 1}}>
            <Text>[Placeholder]</Text>  
          </View>
        </Layout>
      </View>
    </Layout>
  </>
)

// TODO: replace [Placeholder] with real computed numbers
const Dist_info = () => (
  <>
    <Layout style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', border: 'solid'}}>
      <Text category='s1' style={{margin: "5%"}}>Distance:</Text>
      <Text>[Placeholder]</Text>  
    </Layout>
  </>
  
)


// TODO: Insert your map here!
const Map_customize = () => (
  <>
    <Layout style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <Text>[Your Map]</Text>  
    </Layout>

     {/* <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView> */}
  </>
)





export default () => (
<ApplicationProvider {...eva} theme={eva.light}>
  <HomeScreen />
</ApplicationProvider>
);













export const InputAccessoriesShowcase = (props) => {

  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);


  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {/* <Text style={styles.captionText}>Should contain at least 8 symbols</Text> */}
      </View>
    )
  }

  return (
    <Input
      value={value}
      label={props.label}
      placeholder={props.placeholder}
      caption={renderCaption}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
      style={{width: '100%'}}
    />
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  }
});