import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function App() {
  // State variables
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // Convert string input to number safely
  const parseNumbers = () => {
    return {
      a: parseFloat(num1),
      b: parseFloat(num2),
    };
  };

  const add = () => {
    const { a, b } = parseNumbers();
    setResult(a + b);
  };

  const subtract = () => {
    const { a, b } = parseNumbers();
    setResult(a - b);
  };

  const multiply = () => {
    const { a, b } = parseNumbers();
    setResult(a * b);
  };

  const divide = () => {
    const { a, b } = parseNumbers();
    if (b === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(a / b);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={subtract}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={multiply}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={divide}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>
        Result: {result !== null ? result : '—'}
      </Text>
    </View>
  );
}

/* =======================
   STYLES OBJECT
   ======================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 18,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    width: '22%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
});
