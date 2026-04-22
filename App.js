import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Formulario from './src/components/Formulario';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formulario />
    </SafeAreaView>
  );
}