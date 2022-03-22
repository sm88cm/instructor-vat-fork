import './App.css';
import PriceEntryField from './PriceEntryField';

function App() {
  return (
    <div className="App">
      VAT CALCULATOR
      <PriceEntryField label="Price excl VAT: " price={20} />
      <PriceEntryField label="Price incl VAT: " price={24} />
    </div>
  );
}

export default App;
