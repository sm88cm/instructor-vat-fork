import './App.css';
import DisplayBlock from './DisplayBlock';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  return (
    <div className='header field'>
      VAT CALCULATOR
      <div className='pale-green-border'>
        <VatRateField customstyle="field" />
        <PriceEntryField customstyle="field" label="Price excl VAT: " price={20} />
        <DisplayBlock customstyle="field" label="VAT to pay: " value="4" />
        <PriceEntryField customstyle="field" label="Price incl VAT: " price={24} />
      </div>
    </div>
  );
}

export default App;
