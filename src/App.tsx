import { atomWithStorage } from "jotai/utils";
import NewtodoForm from "./NewtodoForm";
import Itemlist from "./Itemlist";

export interface Todoitem {
	id: string;
	title: string;
	completed: boolean;
}

export const todoListAtom = atomWithStorage<Todoitem[]>("todolist", []);

export default function App() {
	return (
		<>
			<NewtodoForm />
			<h1 className="font-bold mt-6 mb-2 text-xl">To-do List</h1>
			<Itemlist />
		</>
	);
}
