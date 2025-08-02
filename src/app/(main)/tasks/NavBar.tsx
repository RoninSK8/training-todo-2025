'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
	return (
		<header className="shadow-sm">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
				<Link className="flex items-center gap-2" href="/tasks">
					<Image src={logo} alt="logo" width={50} height={50} />
					<span className="text-xl font-bold tracking-tight">ToDo Next</span>
				</Link>
				<div className="flex items-center gap-3">
					<UserButton
						appearance={{
							elements: {
								avatarBox: {
									width: 50,
									height: 50,
								},
							},
						}}
					/>
				</div>
			</div>
		</header>
	);
}
