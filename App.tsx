// import react from 'react'
// import {
//   View,
//   Text,
//   SafeAreaView

// } from  'react-native' 

// function App(){

//   return(
//     <SafeAreaView>
//     <View>
//       <Text>Hello World !</Text>
//       <Text>Hello World !</Text>
//       <Text>Hello World !</Text>
//     </View>
//   </SafeAreaView>
//   )
// }
// export default App;

// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Button,
//   Alert
// } from 'react-native';

// function App() {
//   const handlePress = () => {
//     Alert.alert('Button Pressed!', 'You pressed the button.');
//   };

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Hello World !</Text>
//         <Text>Hello World !</Text>
//         <Text>Hello World !</Text>
//         <Button 
//           title="Press Me" 
//           onPress={handlePress} 
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// export default App;



// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Button,
//   Alert
// } from 'react-native';

// function App() {
//   const handlePress = () => {
//     Alert.alert('Button Pressed!', 'You pressed the button.');
//   };

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Hello World !</Text>
        
//         {/* Paragraph within Text */}
//         <Text>
//           This is a paragraph of text. It is an example to show how you can
//           write longer pieces of content in React Native's Text component.
//           You can break lines using {'\n'} or just let it wrap based on the
//           container's width.
//         </Text>

//         <Button 
//           title="Press Me" 
//           onPress={handlePress} 
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// export default App;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const handleSubmit = () => {
    if (isLogin) {
      Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
    } else {
      Alert.alert('Signup', `Email: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>{isLogin ? 'Login' : 'Signup'}</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title={isLogin ? 'Login' : 'Signup'} onPress={handleSubmit} />
        
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  toggleText: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
  },
});

export default App;
