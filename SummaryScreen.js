import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const transactions = [
  {id: '1', name: 'Grocery', amount: 50, date: '2023-07-20'},
  {id: '2', name: 'Electricity Bill', amount: 100, date: '2023-07-18'},
  {id: '3', name: 'Internet', amount: 60, date: '2023-07-15'},
  {id: '4', name: 'Rent', amount: 800, date: '2023-07-01'},
  {id: '5', name: 'Coffee', amount: 5, date: '2023-07-20'},
  {id: '6', name: 'Restaurant', amount: 45, date: '2023-07-19'},
  {id: '7', name: 'Gas', amount: 40, date: '2023-07-18'},
  {id: '8', name: 'Gym Membership', amount: 30, date: '2023-07-17'},
  {id: '9', name: 'Subscription', amount: 15, date: '2023-07-16'},
  {id: '10', name: 'Clothing', amount: 120, date: '2023-07-14'},
  {id: '11', name: 'Books', amount: 25, date: '2023-07-13'},
  {id: '12', name: 'Concert Ticket', amount: 70, date: '2023-07-12'},
  {id: '13', name: 'Taxi', amount: 15, date: '2023-07-11'},
  {id: '14', name: 'Groceries', amount: 90, date: '2023-07-10'},
  {id: '15', name: 'Dinner', amount: 60, date: '2023-07-09'},
];

const totalExpenses = transactions.reduce(
  (sum, transaction) => sum + transaction.amount,
  0,
);

const SummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37474f',
  },
});

export default SummaryScreen;
