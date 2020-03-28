import * as React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
    headerTitle: getHeaderTitle(route),
    headerRight: () => (
      <TouchableHighlight style={{marginRight:20}}onPress={()=>{navigation.navigate('Settings')}}>
        <View>
            <AntDesign size ={32} name="setting" />
        </View>
      </TouchableHighlight>
    ),
   });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Request"
        component={LinksScreen}
        options={{
          title: 'Request',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Wallet':
      return 'Wallet';
    case 'Request':
      return 'Make Request';
  }
}
