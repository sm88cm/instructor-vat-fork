import { useState } from 'react';
import './App.css';
import DisplayBlock from './DisplayBlock';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  const [netPrice, setNetPrice] = useState(0.0);
  const [grossPrice, setGrossPrice] = useState(0.0);

  const handleNetPriceChange = (price) => {
    const gross_price = price * ((20 / 100) + 1);
    setNetPrice(price);
    setGrossPrice(gross_price);
    // calc vat to pay and set state
  };

  const handleGrossPriceChange = (price) => {
    const net_price = price / ((20 / 100) + 1);
    setNetPrice(net_price);
    setGrossPrice(price);
    // calc vat to pay and set state
  };

  return (
    <div className='header field'>
      VAT CALCULATOR
      <div className='pale-green-border'>
        <VatRateField customstyle="field" />
        <PriceEntryField customstyle="field" label="Price excl VAT: " priceChanged={handleNetPriceChange} price={netPrice === 0.0 ? "" : netPrice} />
        <DisplayBlock customstyle="field" label="VAT to pay: " value="4" />
        <PriceEntryField customstyle="field" label="Price incl VAT: " priceChanged={handleGrossPriceChange} price={grossPrice === 0.0 ? "" : grossPrice} />
      </div>
    </div>
  );
}

export default App;
