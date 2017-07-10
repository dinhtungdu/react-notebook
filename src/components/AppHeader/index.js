import React from 'react';
import './style.css';
import Layout from 'antd/lib/layout';
import SearchForm from '../SearchForm';

const { Header } = Layout;

const AppHeader = () => (
  <Header className="App__Header">
    <SearchForm/>
  </Header>
);

export default AppHeader;
