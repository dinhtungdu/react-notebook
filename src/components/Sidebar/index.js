import React from 'react';
import './style.css';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Menu from 'antd/lib/menu';
import Logo from '../Logo';

const { Sider }     = Layout;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

class Sidebar extends React.Component {

	render() {
		return (
			<Sider
				className="Sidebar"
				collapsible
				breakpoint="sm"
				trigger={null}
			>
				<div className="Sidebar__Header">
					<Logo />
					<Icon
						className="trigger"
						type={ 'menu-fold'}
					/>
				</div>
				<Menu
					className="Sidebar__Menu"
					mode="inline"
					theme="light"
				>
					<MenuItemGroup key="category" title={<span><Icon type="book"/><span className="txt">Category</span></span>}>
						<MenuItem>
							<i className="anticon anticon-paper-clip"></i>
							<span className="txt">Menu Item</span>
						</MenuItem>
					</MenuItemGroup>
					<MenuItemGroup key="tag" title={<span><Icon type="tag"/><span className="txt">Tag</span></span>}>
						<MenuItem>
							<i className="anticon anticon-paper-clip"></i>
							<span className="txt">menuitem</span>
						</MenuItem>
					</MenuItemGroup>
				</Menu>
			</Sider>
		);
	}
}

export default Sidebar;
