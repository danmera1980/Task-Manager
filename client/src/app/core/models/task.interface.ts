export type Status = 'todo' | 'in_progress' | 'revision' | 'done';

export interface Task {
  id: string;
  description: string;
  status: Status;
  owner: string;
}

export interface TaskData {
  description: string;
  status: Status;
  owner: string;
}
