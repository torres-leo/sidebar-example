export const links = [
	{
		title: 'Item 0',
	},
	{
		title: 'Item 1',
		children: [
			{
				title: 'Item 1.1',
				children: [
					{
						title: 'Item 1.1.1',
						children: [{ title: 'Otro Item' }, { title: 'Segundo Item', children: [{ title: 'Tercer item' }] }],
					},
				],
			},
			{
				title: 'Item 1.2',
			},
		],
	},
	{
		title: 'Item 2',
		children: [
			{
				title: 'Item 2.1',
			},
		],
	},
];
