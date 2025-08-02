'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { addTask } from '../actions';

export default function AddTask() {
	const [title, setTitle] = useState('');

	const handleAdd = () => {
		if (title.trim()) {
			addTask(title.trim());
			setTitle('');
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') handleAdd();
	};

	return (
		<Card className="w-full max-w-200 mx-auto shadow-md rounded-2xl p-4">
			<CardContent className="flex flex-col gap-3 p-0">
				<Input
					placeholder="Добавить дело..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					onKeyDown={handleKeyDown}
					className="rounded-xl"
				/>
				<Button onClick={handleAdd} className="w-full gap-2 rounded-xl">
					<Plus className="w-4 h-4" />
					Добавить
				</Button>
			</CardContent>
		</Card>
	);
}
