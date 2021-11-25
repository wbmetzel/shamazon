import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router basename="/shamazon">
      <div className="app">
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route path="login" element={
            <Login />
          } />
          <Route path="/checkout" element={
            <div>
              <Header />
              <Checkout />
            </div>
          } />
          <Route path="/" element={
            <div>
              <Header />
              <Home />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
