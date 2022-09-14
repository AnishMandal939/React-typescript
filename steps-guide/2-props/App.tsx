import './App.css';
import CustomerClassic, { Cust, Customer } from './components/Customer';

function App() {
  return (
    <>
      <Customer name="Anish Mandal" title="trainer" age={22} />
      <CustomerClassic />
      <Cust />
    </>    
  );
}

export default App;
