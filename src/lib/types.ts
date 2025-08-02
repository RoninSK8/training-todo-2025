import { TaskValues } from './validation';
import { Task } from '@/generated/prisma/client';

export interface TaskFormProps {
	taskData: TaskValues;
	setTaskData: (data: TaskValues) => void;
}

export type TaskServerData = Task;
