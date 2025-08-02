import React from 'react';
import NavBar from './tasks/NavBar';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
}
