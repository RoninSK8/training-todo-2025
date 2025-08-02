//
'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TaskServerData } from '@/lib/types';

import React from 'react';
import { checkTask, deleteTask, unCheckTask } from '../actions';

export default function Task(value: TaskServerData) {
	return (
		<div className="flex items-center justify-between gap-4 p-4 rounded-xl w-full max-w-200 mx-auto shadow-md">
			<div className="flex items-center gap-3">
				<Checkbox
					checked={value.completed}
					onCheckedChange={(checked) => {
						if (checked) {
							checkTask(value.id);
						} else {
							unCheckTask(value.id);
						}
					}}
					id={`todo-${value.id}`}
				/>
				<label
					htmlFor={`todo-${value.id}`}
					className={`text-base ${value.completed ? 'line-through text-muted-foreground' : ''}`}
				>
					{value.title}
				</label>
			</div>
			<Button
				variant="ghost"
				size="icon"
				className="text-muted-foreground hover:text-destructive"
				onClick={() => {
					deleteTask(value.id);
				}}
			>
				✕
			</Button>
		</div>
	);
}
