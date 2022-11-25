import React from 'react';
import { links } from './links';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
	return (
		<div>
			<p>Logo</p>
			<SidebarItem items={links} />
		</div>
	);
};

export default Sidebar;
