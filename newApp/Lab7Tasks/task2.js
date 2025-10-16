import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');
  const [records, setRecords] = useState([]);

  const addRecord = () => {
    if (name !== '' && gpa !== '') {
      const newRecord = { name: name, gpa: gpa };
      setRecords([...records, newRecord]);
      setName('');
      setGpa('');
    }
  };

  const deleteRecord = (id) => {
    const newList = records.filter(item => item.id !== id);
    setRecords(newList);
  };

  const clearAll = () => {
    setRecords([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Record App</Text>

      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <Text>GPA:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter GPA"
        value={gpa}
        onChangeText={setGpa}
        keyboardType="numeric"
      />

      <Button title="Add" onPress={addRecord} />

      <Text style={styles.subHeading}>Records:</Text>

      {records.map((item, index) => (
        <View key={item.id} style={styles.recordBox}>
          <Text>{index + 1}. {item.name} — {item.gpa}</Text>
          <TouchableOpacity onPress={() => deleteRecord(item.id)}>
            <Text style={styles.deleteButton}>X</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Button title="Clear All" color="gray" onPress={clearAll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  heading: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subHeading: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  input: { borderWidth: 1, padding: 5, marginVertical: 5, borderRadius: 5 },
  recordBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d0f0c0',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});