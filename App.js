import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionListScreen from './TransactionListScreen';
import TransactionDetailScreen from './TransactionDetailScreen';
import SummaryScreen from './SummaryScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransactionList" component={TransactionListScreen} />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {backgroundColor: '#f0f0f0'},
        })}>
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
