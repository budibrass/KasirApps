import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Foods from './views/Food';
import Drinks from './views/Drink';
import Snacks from './views/Snack';
import History from './views/History';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Foods />} exact/>
            <Route path="/drinks" element={<Drinks />} exact/>
            <Route path="/snacks" element={<Snacks />} exact/>
            <Route path="/History" element={<History />} exact/>
          </Routes>
        </Layout>
      </Layout>
    </Router>
    </Provider>
  );
};

export default App;
