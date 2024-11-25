import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="classes" />
      <Stack.Screen name="students" />
      <Stack.Screen name="progress" />
    </Stack>
  );
}
