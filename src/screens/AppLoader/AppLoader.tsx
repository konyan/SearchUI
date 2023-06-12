import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: AppLoaderProps) => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [iconFontLoaded] = useFonts({
    'FiraMono-Regular': require('../../../assets/fonts/FiraMono-Regular.ttf'),
    'FiraMono-Medium': require('../../../assets/fonts/FiraMono-Medium.ttf'),
    'FiraMono-Bold': require('../../../assets/fonts/FiraMono-Bold.ttf'),
  });

  useEffect(() => {
    setAppIsReady(true);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && iconFontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, iconFontLoaded]);

  if (!appIsReady || !iconFontLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};
export default AppLoader;
