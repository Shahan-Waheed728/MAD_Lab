import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Modal, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

export default function App() {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [youSave, setYouSave] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to calculate discount dynamically
  const calculateDiscount = (price, discountPercent) => {
    const p = parseFloat(price);
    const d = parseFloat(discountPercent);

    if (isNaN(p) || isNaN(d) || p <= 0 || d < 0 || d > 100) {
      setYouSave(0);
      setFinalPrice(0);
      return;
    }

    const save = (p * d) / 100;
    const final = p - save;

    setYouSave(save.toFixed(2));
    setFinalPrice(final.toFixed(2));
  };

  // Called when user types price or discount
  const handlePriceChange = (value) => {
    setOriginalPrice(value);
    calculateDiscount(value, discount);
  };

  const handleDiscountChange = (value) => {
    setDiscount(value);
    calculateDiscount(originalPrice, value);
  };

  // Save current calculation to history
  const handleSave = () => {
    if (finalPrice > 0 && originalPrice && discount) {
      const newEntry = {
        id: Date.now().toString(),
        price: originalPrice,
        discount: discount,
        final: finalPrice,
      };
      setHistory([newEntry, ...history]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💸 Discount Calculator</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Original Price"
        value={originalPrice}
        onChangeText={handlePriceChange}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Discount %"
        value={discount}
        onChangeText={handleDiscountChange}
      />

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>You Save: Rs. {youSave}</Text>
        <Text style={styles.resultText}>Final Price: Rs. {finalPrice}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} color="#4CAF50" />
        <Button title="View History" onPress={() => setModalVisible(true)} color="#2196F3" />
      </View>

      {/* History Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>🕘 Calculation History</Text>

          {history.length === 0 ? (
            <Text style={styles.emptyText}>No history yet!</Text>
          ) : (
            <FlatList
              data={history}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Text style={styles.historyItem}>
                  {item.price} – {item.discount}% = {item.final}
                </Text>
              )}
            />
          )}

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

// 💅 Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#2C3E50',
  },
  input: {
    width: '90%',
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
  },
  resultBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    marginVertical: 5,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    width: '80%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  modalHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E86C1',
    textAlign: 'center',
  },
  historyItem: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 50,
  },
  closeButton: {
    backgroundColor: '#E74C3C',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
    width: 100,
  },
  closeButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});