import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          longitude: 5.241923128107001,
          latitude: 43.434799659137404,
          latitudeDelta: 5.241923128107001,
          longitudeDelta: 43.434799659137404,
        }}
        style={styles.map}
      >
        <Marker
          coordinate={{
            longitude: 5.241923128107001,
            latitude: 43.434799659137404,
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0CACB",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,

    height: Dimensions.get("window").height,
  },
});
