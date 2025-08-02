import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Link className="flex items-center gap-2" href="/tasks">
				<Image src={logo} alt="logo" width={200} height={200} />
				<span className="text-5xl font-bold tracking-tight">ToDo Next</span>
			</Link>
		</div>
	);
}
