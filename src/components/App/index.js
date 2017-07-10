import React from 'react';
import './style.css';

import Layout from 'antd/lib/layout';

import AppHeader from '../AppHeader';
import Sidebar from '../Sidebar';

const { Content } = Layout;

const App = () => (
	<div className="App">
		<Layout className="ant-layout-has-sider">
			<Sidebar/>
			<Layout>
				<AppHeader/>
				<Content className="App__Content">
					This is app content area.
				</Content>
			</Layout>
		</Layout>
	</div>
);

export default App;
