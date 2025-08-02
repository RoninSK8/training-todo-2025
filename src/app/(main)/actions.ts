'use server';

import prisma from '@/lib/prisma';
import { TaskValues } from '@/lib/validation';
import { auth } from '@clerk/nextjs/server';

import { revalidatePath } from 'next/cache';

export async function deleteTask(id: string) {
	const { userId } = await auth();

	if (!userId) {
		throw new Error('Unauthorized');
	}

	const task = await prisma.task.findUnique({
		where: {
			id,
			userId,
		},
	});

	if (!task) {
		throw new Error('Task not found');
	}

	await prisma.task.delete({
		where: {
			id,
		},
	});

	revalidatePath('/tasks');
}

export async function unCheckTask(id: string) {
	const { userId } = await auth();

	if (!userId) {
		throw new Error('Unauthorized');
	}

	const task = await prisma.task.findUnique({
		where: {
			id,
			userId,
		},
	});

	if (!task) {
		throw new Error('Task not found');
	}

	await prisma.task.update({
		where: {
			id,
		},
		data: {
			completed: false,
		},
	});

	revalidatePath('/tasks');
}

export async function checkTask(id: string) {
	const { userId } = await auth();

	if (!userId) {
		throw new Error('Unauthorized');
	}

	const task = await prisma.task.findUnique({
		where: {
			id,
			userId,
		},
	});

	if (!task) {
		throw new Error('Task not found');
	}

	await prisma.task.update({
		where: {
			id,
		},
		data: {
			completed: true,
		},
	});

	revalidatePath('/tasks');
}

export async function addTask(value: string) {
	const { userId } = await auth();

	if (!userId) {
		throw new Error('Unauthorized');
	}
	const title = value;
	const completed = false;
	await prisma.task.create({
		data: {
			userId,
			title,
			completed,
		},
	});

	revalidatePath('/tasks');
}
