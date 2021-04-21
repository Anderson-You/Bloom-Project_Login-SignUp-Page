import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//import SignUp_Screen from './screen/SignUp_Screen';

export default class App extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>bl∞m</Text>
        <Text style={styles.title}>Register as Student</Text>
        <Text style={styles.subtitle}>Already have account?  Sign In</Text>  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ username: text })} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Your email"
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Your password"
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Retype password"
            placeholderTextColor="#dcdcdc"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGN  UP</Text>
        </TouchableOpacity>
        <Text style={styles.option}>____________             OR             ____________</Text>
        <TouchableOpacity style={styles.loginBtn2}>
          <Text style={styles.loginText2}>SIGNUP WITH FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText3}>REGISTER AS BUSINESS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a5acd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#ffffff",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#c0c0c0",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 11,
    color: "#c0c0c0",
    marginBottom: 30
  },
  inputView: {
    width: "85%",
    backgroundColor: "#d3d3d3",
    opacity: 0.4,
    borderRadius: 10,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white",
  },
  loginBtn: {
    width: "85%",
    backgroundColor: "#9acd32",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  loginBtn2: {
    width: "85%",
    backgroundColor: "#4169e1",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  loginText: {
    color: "black",
    fontWeight: "bold"
  },
  option: {
    color: "white",
    fontWeight: "bold",
    opacity: 0.25,
    marginTop: 5,
    marginBottom: 25
  },
  loginText2: {
    color: "white",
    fontWeight: "bold"
  },
  loginText3: {
    color: "white",
    fontWeight: "bold",
    opacity: 0.25,
    marginTop: 15,
  }
});
