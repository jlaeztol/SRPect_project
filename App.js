import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, CheckBox } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome,Shoppers!</Text>
        <Text style={styles.registerText}>Shop Smart, Save Big, Never Overpay!</Text>
      </View>

      <View style={styles.loginContainer}>
        
        <Text style={styles.emailText}>Email</Text>
        <View>
          <TextInput
            style={styles.emailInputContainer}
            value=''
            onChange={() => {}}
            placeholder='Enter your email'
            placeholderTextColor='gray'
          />
        </View>

        <Text style={styles.passwordText}>Password</Text>
        <View>
          <TextInput
            style={styles.passwordInputContainer}
            value=''
            onChange={() => {}}
            placeholder='Please enter your password'
            placeholderTextColor='gray'
          />
        </View>    

        <View style={styles.rememberMeContainer}>
          <CheckBox 
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
          <View style={styles.registerContainer}>
            <Text>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>

      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    paddingVertical: 35,
    paddingHorizontal: 15,
  },

  headerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 600,
  },

  loginContainer: {
    flex: 6,
  },

  emailInputContainer: {
    height: 45,
    padding: 10,
    borderWidth:2,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  emailText: {
    margin: 1,
    color: '#4E0189',
    fontSize: 14,
    fontWeight: 600,
  },
  passwordInputContainer: {
    height: 45,
    padding: 10,
    borderWidth:2,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  passwordText: {
    margin: 1,
    color: '#4E0189',
    fontSize: 14,
    fontWeight: 600,
  },

  rememberMeContainer: {
    height: 25,
    flexDirection: 'row',
  },
  rememberMeText: {
    fontSize: 14,
    fontWeight: 600,
    color: '#000C14',
    margin: 3,
  },

  buttonContainer:{
    flex: 1,
    justifyContent: 'center',
  },

  buttonLogin: {
    height: 45,
    marginBottom: 10,
    backgroundColor: '#4E0189',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 600,
  },

  registerContainer: {
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  registerText: {
    color: '#999EA1',
    fontSize: 14,
    fontWeight: 600,
  },
  signUpText: {
    color: '#4E0189',
    fontSize: 14,
    fontWeight: 600,
  }, 
});