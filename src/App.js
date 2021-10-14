import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography,Space } from "antd";
import Navbar from "./components/Navbar";
import './App.css'
import HomePage from "./components/HomePage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

const App = () => {
  return (
      <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
          <div className="main">
             <Layout>
                  <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/exchanges">
                            <Exchanges/>
                        </Route>
                        <Route path="/cryptocurrencies">
                            <Cryptocurrencies/>
                        </Route>
                        <Route path="/crypto/:coinId">
                            <CryptoDetails/>
                        </Route>
                        <Route path="/news">
                            <News/>
                        </Route>
                    </Switch>
                  </div>
             </Layout>
          <div className="footer">
                <Typography.Title  level={5} style={{color: 'white', textAlign: 'center'}}>
                    Cryptoverse <br/>
                    All rights reserved
                </Typography.Title>
                  <Space>
                      <Link to="/">Home</Link>
                      <Link to="/exchanges">Exchanges</Link>
                      <Link to="/news">News</Link>
                  </Space>
              </div>
          </div>
      </div>
  );
};

export default App;