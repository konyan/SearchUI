import { CustomStatusBar } from '@components';
import { tw } from '@core';
import { HomeScreen } from '@screens';
import { ScrollView } from 'react-native';
import AppLoader from 'src/screens/AppLoader';

export default function App() {
  return (
    <AppLoader>
      <ScrollView
        style={[
          tw`flex`,
          {
            backgroundColor: '#F9F8F7',
          },
        ]}
      >
        <CustomStatusBar backgroundColor="#F9F8F7" />
        <HomeScreen />
      </ScrollView>
    </AppLoader>
  );
}
