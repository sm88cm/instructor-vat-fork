import './App.css';
import PriceEntryField from './PriceEntryField';

function App() {
  return (
    <div className="App">
      VAT CALCULATOR
      <PriceEntryField label="Price excl VAT: " />
      <PriceEntryField label="Price incl VAT: " />
    </div>
  );
}

export default App;
