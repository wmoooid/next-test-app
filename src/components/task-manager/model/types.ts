export type Task = {
    id: string;
    name: string;
    email: string;
    text: string;
    isCompleted: boolean;
    isFiltered?: boolean;
};

export type TaskFilter = {
    query: string;
    sort: boolean;
    completed: boolean;
};
