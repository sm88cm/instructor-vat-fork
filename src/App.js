import { useState } from 'react';
import './App.css';
import DisplayBlock from './DisplayBlock';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  const [netPrice, setNetPrice] = useState(0.0);
  const [grossPrice, setGrossPrice] = useState(0.0);
  return (
    <div className='header field'>
      VAT CALCULATOR
      <div className='pale-green-border'>
        <VatRateField customstyle="field" />
        <PriceEntryField customstyle="field" label="Price excl VAT: " price={netPrice === 0.0 ? "" : netPrice} />
        <DisplayBlock customstyle="field" label="VAT to pay: " value="4" />
        <PriceEntryField customstyle="field" label="Price incl VAT: " price={grossPrice === 0.0 ? "" : grossPrice} />
      </div>
    </div>
  );
}

export default App;
