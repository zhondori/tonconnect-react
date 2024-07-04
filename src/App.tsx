import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import View from './View';

function App() {
  const manifestUrl = `${import.meta.env.VITE_APP_URL}/tonconnect-manifest.json`

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <View />
    </TonConnectUIProvider>
  )
}

export default App
