import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const transactions = [
  {
    id: '1',
    name: 'Grocery',
    amount: 50,
    date: '2023-07-20',
    category: 'Food',
    notes: 'Bought groceries for the week',
  },
  {
    id: '2',
    name: 'Electricity Bill',
    amount: 100,
    date: '2023-07-18',
    category: 'Utilities',
    notes: 'Monthly electricity bill',
  },
  {
    id: '3',
    name: 'Internet',
    amount: 60,
    date: '2023-07-15',
    category: 'Utilities',
    notes: 'Monthly internet bill',
  },
  {
    id: '4',
    name: 'Rent',
    amount: 800,
    date: '2023-07-01',
    category: 'Housing',
    notes: 'Monthly rent payment',
  },
  {
    id: '5',
    name: 'Coffee',
    amount: 5,
    date: '2023-07-20',
    category: 'Food',
    notes: 'Morning coffee',
  },
  {
    id: '6',
    name: 'Restaurant',
    amount: 45,
    date: '2023-07-19',
    category: 'Food',
    notes: 'Dinner at restaurant',
  },
  {
    id: '7',
    name: 'Gas',
    amount: 40,
    date: '2023-07-18',
    category: 'Transportation',
    notes: 'Filled gas tank',
  },
  {
    id: '8',
    name: 'Gym Membership',
    amount: 30,
    date: '2023-07-17',
    category: 'Fitness',
    notes: 'Monthly gym membership',
  },
  {
    id: '9',
    name: 'Subscription',
    amount: 15,
    date: '2023-07-16',
    category: 'Entertainment',
    notes: 'Monthly streaming service',
  },
  {
    id: '10',
    name: 'Clothing',
    amount: 120,
    date: '2023-07-14',
    category: 'Shopping',
    notes: 'Bought new clothes',
  },
];

export default function TransactionListScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TransactionDetail', {transaction: item})
            }
            style={styles.transactionItem}>
            <Text style={styles.transactionText}>{item.name}</Text>
            <Text style={styles.transactionText}>${item.amount}</Text>
            <Text style={styles.transactionText}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  transactionItem: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionText: {
    fontSize: 16,
    color: '#495057',
  },
});
