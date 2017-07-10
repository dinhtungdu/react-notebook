import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import './style.css';

const SearchForm = ({ dispatch }) => {

	return (
		<div className="SearchForm">
			<Input
				prefix={<Icon type="search"/>}
				placeholder="Search.."
			/>
		</div>
	);
};

export default SearchForm;
