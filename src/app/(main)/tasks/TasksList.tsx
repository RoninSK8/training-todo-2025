import prisma from '@/lib/prisma';
import React from 'react';

export default async function TasksList() {
	const tasks = await prisma.post.findMany();

	return <div></div>;
}
