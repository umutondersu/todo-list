import { useAtom } from "jotai";
import { Todoitem, todoListAtom } from "./App";

function TodoItem({ id, completed, title }: Todoitem) {
	const [_, SetTodoList] = useAtom(todoListAtom);

	function toggletodo(id: string, completed: boolean) {
		SetTodoList((currentTodos) => {
			return currentTodos.map((item) => {
				let result;
				item.id === id
					? (result = { ...item, completed })
					: (result = item);
				return result;
			});
		});
	}

	function deleteItem(id: string): void {
		SetTodoList((CurrentTodos) => {
			return CurrentTodos.filter((item) => item.id !== id);
		});
	}

	return (
		<li
			key={id}
			className="pl-2 flex flex-row space-x-3 text-base items-center mb-1.5">
			<label className="flex items-center">
				<input
					className="mr-2 focus:ring-offset-0 focus:ring-0 rounded-md"
					type="checkbox"
					checked={completed}
					onChange={(e) => toggletodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button
				onClick={() => deleteItem(id)}
				className="text-[#cc0000] bg-red-950 border border-[#cc0000] rounded-sm px-2">
				Delete
			</button>
		</li>
	);
}

export default TodoItem;
