import React from 'react';

import NewTaskField from './NewTaskField';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import Task from './Task';
import { TaskServerData } from '@/lib/types';
import { addTask } from '../actions';

export async function TasksPage() {
	const { userId } = await auth();
	if (!userId) return null;
	const tasks: TaskServerData[] = await prisma.task.findMany({
		where: {
			userId,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});

	return (
		<div className="flex grow flex-col">
			<header className="space-y-1.5  px-3 py-5 text-center">
				<h1 className="text-2xl font-bold">Ваш список дел</h1>
				<p className="text-sm text-muted-foreground">
					Добавляйте, отмечайте, удаляйте ваши дела
				</p>
				{tasks.length > 0
					? tasks.map((task) => <Task key={task.id} {...task} />)
					: null}
				<NewTaskField />
			</header>
			<main className="relative grow"></main>
		</div>
	);
}

export default TasksPage;
