import { atom, useAtom } from "jotai";
import { todoListAtom } from "./App";

const newItemAtom = atom<string>("");

export default function NewtodoForm() {
	const [NewItem, SetNewItem] = useAtom(newItemAtom);
	const [_, SetTodoList] = useAtom(todoListAtom);

	function addItem() {
		if (NewItem) {
			SetTodoList((curentTodos) => [
				...curentTodos,
				{
					id: crypto.randomUUID(),
					title: NewItem,
					completed: false,
				},
			]);
		}
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		addItem();
		SetNewItem("");
	}
	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<label htmlFor="item">New Item</label>
			<input
				className="bg-[#00AAFF] mb-2 rounded-sm border-blue-400 border p-0.5"
				value={NewItem}
				type="text"
				id="item"
				onChange={(e) => SetNewItem(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-blue-900 rounded-sm border-blue-400 border text-sm p-0.5 hover:bg-slate-950">
				Add
			</button>
		</form>
	);
}
