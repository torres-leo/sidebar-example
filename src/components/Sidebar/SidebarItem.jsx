import React, { useState } from 'react';

const SidebarItem = ({ items }) => {
	const [displayChildren, setDisplayChildren] = useState({});

	const handleDisplayChildren = (item) => {
		setDisplayChildren({
			...displayChildren,
			[item.title]: !displayChildren[item.title],
		});
	};

	const renderItems = () => {
		return items.map((item, index) => (
			<li key={index}>
				{item.title}{' '}
				{item.children && (
					<button onClick={() => handleDisplayChildren(item)}>{displayChildren[item.title] ? '-' : '+'}</button>
				)}
				{displayChildren[item.title] && item.children && <SidebarItem items={item.children} />}
			</li>
		));
	};

	return <ul>{renderItems()}</ul>;
};

export default SidebarItem;
