import { z } from 'zod';

export const requiredString = z
	.string()
	.trim()
	.min(1, 'Task title is required');

export const taskSchema = z.object({
	completed: z.boolean(),
	title: requiredString,
});

export type TaskValues = z.infer<typeof taskSchema>;
