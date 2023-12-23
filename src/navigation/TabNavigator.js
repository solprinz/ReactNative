import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { colors } from "../global/colors";
import OrdersStack from "./OrdersStack";
import TabIcon from "../components/TabIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = (category) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopStarck"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon icon="shop" label="Categorias" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="OrdersStack"
          component={OrdersStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon icon="list" label="Ordenes" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon icon="shopping-cart" label="Carrito" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    color: colors.secondary,
    position: "absolute",
  },
});
