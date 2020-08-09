import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {auth} from '../../config';

export default class LoadingScreen extends React.Component {
    componentDidMount(){
        this.checkIfUserExists()
    }
    checkIfUserExists = () => {
        auth.onAuthStateChanged((user) => {
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
