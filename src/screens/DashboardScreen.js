import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { db } from "../../config";

export default class DashboardScreen extends React.Component {
  state = {
    name: "",
    email: "",
    contact: "",
    address: "",
    msg: "",
  };
  submitDetails = async () => {
    if (
      this.state.name.length === 0 ||
      this.state.email.length === 0 ||
      this.state.contact.length === 0 ||
      this.state.address.length === 0
    ) {
      return Alert.alert("All fields are mandatory");
    } else {
      const details = {
        name: this.state.name,
        email: this.state.email,
        contact: this.state.contact,
        address: this.state.address,
      };
      console.log(details);
      await db
        .collection("users")
        .add({
          details,
        })
        .then(
          (docRef) => console.log("doc added", docRef),
          this.setState({
            msg: "details successfully added",
          }),
          this.clearState()
        )
        .catch((err) => {
          console.log(err);
        });
    }
  };
  clearState = () => {
    this.setState({
      name: "",
      email: "",
      contact: "",
      address: "",
      msg: ''
    });
  };
  render() {
    console.log(this.props.navigation.getParam("userName"));
    return (
      <View style={styles.container}>
        <View style={{ margin: 40 }}>
          <Text>
            Enter your details {this.props.navigation.getParam("userName")}
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              marginBottom: 20,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(name) => this.setState({ name })}
            placeholder="enter full name"
            value={this.state.name}
          />
          <TextInput
            style={{
              height: 40,
              marginBottom: 20,
              width: "100%",
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(email) => this.setState({ email })}
            placeholder="enter email"
            value={this.state.email}
          />
          <TextInput
            style={{
              height: 40,
              marginBottom: 20,
              width: "100%",
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(contact) => this.setState({ contact })}
            placeholder="enter contact number"
            value={this.state.contact}
          />
          <TextInput
            style={{
              height: 40,
              marginBottom: 20,
              width: "100%",
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(address) => this.setState({ address })}
            placeholder="enter address"
            value={this.state.address}
          />
        </View>
        <View>
          <Button
            onPress={this.submitDetails}
            title="Submit"
            color="blue"
            accessibilityLabel="submit details"
          />
        </View>
        <View>
          <Text>{this.state.msg}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
