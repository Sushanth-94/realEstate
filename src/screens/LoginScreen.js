import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from 'expo-google-app-auth';

class LoginScreen extends React.Component {
  componentDidMount() {}
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        // iosClientId: IOS_CLIENT_ID,
        androidClientId: '1059634927221-oa7mieo8i5edltso789dvc7rm5d9j2dc.apps.googleusercontent.com',
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("LoginScreen | ", result.user.givenName);
        this.props.navigation.navigate("DashboardScreen", 
        {
          userName: result.user.givenName,
        })
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log('LoginScreen | Error with login', e);
      return { error: true };
    }
  }
  render() {
    return (
      <View style={styles.btn}>
        <Button
          onPress={this.signInWithGoogle}
          title="Sign in with Google"
          color="#841584"
          accessibilityLabel="click to login using google account"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    width: "100%",
    backgroundColor: "#3474D3",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
