import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TransactionDetailScreen({route}) {
  const {transaction} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{transaction.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>${transaction.amount}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{transaction.category || 'N/A'}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Notes:</Text>
        <Text style={styles.value}>
          {transaction.notes || 'No additional notes'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e0f7fa',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37474f',
  },
  value: {
    fontSize: 16,
    color: '#37474f',
  },
});
