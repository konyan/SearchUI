import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar } from 'react-native';
import tw from 'twrnc';

type CustomStatusBarProps = {
  backgroundColor?: string;
};

export const CustomStatusBar = ({ backgroundColor }: CustomStatusBarProps) => {
  return (
    <SafeAreaView
      accessibilityRole="header"
      style={[
        tw`w-full`,
        {
          paddingTop: StatusBar.currentHeight,
          backgroundColor,
        },
      ]}
    >
      <ExpoStatusBar style="dark" backgroundColor={backgroundColor} />
    </SafeAreaView>
  );
};

export default CustomStatusBar;
