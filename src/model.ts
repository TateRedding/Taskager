export interface Task {
    id: number;
    task: string;
    isDone: boolean
};

export type Actions =
    { type: "add"; payload: string }
    | { type: "complete"; payload: number }
    | { type: "edit"; payload: { id: number, task: string } }
    | { type: "remove"; payload: number };