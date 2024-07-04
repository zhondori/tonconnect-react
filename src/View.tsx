import './App.css'
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { Address } from './components/Address';

function View() {
  const address = useTonAddress(false);
  
  return (
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-semibold'>TON Connect App</h1>
        {address ? <Address /> : 
        <TonConnectButton className='mt-4' />
      }
      </div>
  )
}

export default View
