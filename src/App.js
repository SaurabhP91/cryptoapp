

import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import { ReactDOM } from 'react-dom';
import Navbar from './components/Navbar';
import './App.css'
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails';
import News from './components/News';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
       <Navbar/>
      </div>

      <div className='main'>
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage/>}>

            </Route>
            <Route exact path="/exchanges" element={ <Exchanges/>}>
             
            </Route>
            <Route exact path="/cryptocurrencies" element={ <Cryptocurrencies />}>
             
            </Route>
            <Route exact path="/crypto/:coinId" element={<Cryptodetails />}>
              
            </Route>
            <Route exact path="/news" element={<News />}>
              
            </Route>
          </Routes>
        </div>
      </Layout>

      <div className='footer'>
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023 
          <Link to="/">
             Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>

        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>

    

  </div>
  )
}

export default App
