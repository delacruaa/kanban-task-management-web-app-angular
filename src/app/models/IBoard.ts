export interface ISubtask {
    id:string,
    isCompleted:boolean,
    title: string
}

export interface ITask {
    id:string,
    title:string,
    description?:string,
    status?:string,
    subtasks?:ISubtask[]
}

export interface IColumn {
	id: string;
	name: string;
}
export interface IBoard {
	id: string;
	columns?: IColumn[];
	tasks: ITask[];
	name: string;
}