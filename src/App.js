import './App.css';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  return (
    <div className="App">
      VAT CALCULATOR
      <VatRateField />
      <PriceEntryField label="Price excl VAT: " price={20} />
      <PriceEntryField label="Price incl VAT: " price={24} />
    </div>
  );
}

export default App;
