
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.jsx'
import Transactions from './containers/Transactions/Transactions.jsx'
import Login from './containers/Login/Login.jsx'
import Register from './containers/Register/Register.jsx'
import NewTransaction from './containers/newTransaction/newTransaction.jsx'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/transactions" element={<Transactions/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/newTransaction" element={<NewTransaction/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
