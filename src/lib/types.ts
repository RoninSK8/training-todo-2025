import { TaskValues } from './validation';
import { Task } from '@prisma/client';

export interface TaskFormProps {
	taskData: TaskValues;
	setTaskData: (data: TaskValues) => void;
}

export type TaskServerData = Task;
