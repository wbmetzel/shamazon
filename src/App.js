import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router basename="/shamazon">
      <div className="app">
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route path="/checkout" element={
            <div>
              <Checkout />
            </div>
          } />
          <Route path="/" element={
            <div>
              <Home />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
