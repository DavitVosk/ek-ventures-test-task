import { MediaProvider } from "@/context/MediaContext";
import { AuthProvider, useAuth } from "@/context/UserContext";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <AuthProvider>
      <StatusBar hidden={true} />
      <MediaProvider>
        <MainLayout />
      </MediaProvider>
    </AuthProvider>
  );
};

const MainLayout = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    setUser({
      name: "John",
      image: "@/assets/images/Avatar.png",
    });
  }, []);

  useEffect(() => {
    // Lets imagine here we make authentication checks, set user's some data
    // and only after this - hide splash screen
    if (user) {
      SplashScreen.hideAsync();
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
