import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/shamazon">
      <div className="app">
        <Routes>
          <Route path="*" element={<NotFound />}/>
          <Route path="/checkout" element={
            <div>
              <Header />
              <h1>oh yay...</h1>
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
