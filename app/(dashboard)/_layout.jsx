import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import images from "../../constants/images";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View className="w-full items-center justify-center flex my-4 mb-8">
        <Image
          source={images.Wlogo}
          className="w-32 h-20"
          resizeMode="contain"
        />
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Entypo
            name="home"
            size={size}
            color={pathname == "/home" ? "#fff" : "#2c67f2"}
          />
        )}
        label={"Home"}
        labelStyle={[{ color: pathname == "/home" ? "#fff" : "#2c67f2" }]}
        style={{
          backgroundColor: pathname == "/home" ? "#2c67f2" : "#fff",
        }}
        onPress={() => {
          router.push("/(dashboard)/(tabs)/home");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="notifications"
            size={size}
            color={pathname == "/notifications" ? "#fff" : "#2c67f2"}
          />
        )}
        label={"Notification"}
        labelStyle={[
          { color: pathname == "/notifications" ? "#fff" : "#2c67f2" },
        ]}
        style={{
          backgroundColor: pathname == "/notifications" ? "#2c67f2" : "#fff",
        }}
        onPress={() => {
          router.push("/(dashboard)/notifications");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings"
            size={size}
            color={pathname == "/settings" ? "#fff" : "#2c67f2"}
          />
        )}
        label={"Settings"}
        labelStyle={[{ color: pathname == "/settings" ? "#fff" : "#2c67f2" }]}
        style={{
          backgroundColor: pathname == "/settings" ? "#2c67f2" : "#fff",
        }}
        onPress={() => {
          router.push("/(dashboard)/settings");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Entypo
            name="help-with-circle"
            size={size}
            color={pathname == "/help" ? "#fff" : "#2c67f2"}
          />
        )}
        label={"Help Center"}
        labelStyle={[{ color: pathname == "/help" ? "#fff" : "#2c67f2" }]}
        style={{ backgroundColor: pathname == "/help" ? "#2c67f2" : "#fff" }}
        onPress={() => {
          router.push("/(dashboard)/help");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Entypo
            name="info-with-circle"
            size={size}
            color={pathname == "/about" ? "#fff" : "#2c67f2"}
          />
        )}
        label={"About"}
        labelStyle={[{ color: pathname == "/about" ? "#fff" : "#2c67f2" }]}
        style={{ backgroundColor: pathname == "/about" ? "#2c67f2" : "#fff" }}
        onPress={() => {
          router.push("/(dashboard)/about");
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="notifications" options={{ headerShown: false }} />
      <Drawer.Screen name="settings" options={{ headerShown: false }} />
      <Drawer.Screen name="help" options={{ headerShown: false }} />
      <Drawer.Screen name="about" options={{ headerShown: false }} />
    </Drawer>
  );
};

export default DrawerLayout;
