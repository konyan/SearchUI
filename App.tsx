import { CustomStatusBar } from '@components';
import { tw } from '@core';
import { HomeScreen } from '@screens';
import { View } from 'react-native';
import AppLoader from 'src/screens/AppLoader';

export default function App() {
  return (
    <AppLoader>
      <CustomStatusBar backgroundColor="#F9F8F7" />
      <View
        style={[
          tw`flex-1`,
          {
            backgroundColor: '#F9F8F7',
          },
        ]}
      >
        <HomeScreen />
      </View>
    </AppLoader>
  );
}
