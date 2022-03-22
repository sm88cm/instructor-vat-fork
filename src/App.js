import './App.css';
import DisplayBlock from './DisplayBlock';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  return (
    <div className="App">
      VAT CALCULATOR
      <VatRateField />
      <PriceEntryField label="Price excl VAT: " price={20} />
      <DisplayBlock label="VAT to pay: " value="4" />
      <PriceEntryField label="Price incl VAT: " price={24} />
    </div>
  );
}

export default App;
