import './App.css';
import Counter from './components/Counter';
import CustomerClassic, { Cust, Customer } from './components/Customer';
import Users from './components/Users';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Customer name="Anish Mandal" title="trainer" age={22} />
          <CustomerClassic />
          <Cust />
          </div>
          <div className="col-md-6">
            <Users userId={1} username="admin" />
          </div>
        </div>
      </div>

      <h5>Counter</h5>
      <div className="col-md-9 bg-warning">
        <Counter />
      </div>
    </>    
  );
}

export default App;
