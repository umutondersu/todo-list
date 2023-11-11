import { useAtom } from "jotai";
import { todoListAtom } from "./App";
import TodoItem from "./TodoItem";

export default function Itemlist() {
	const [Todolist, _] = useAtom(todoListAtom);

	return (
		<ul className="space-y-1">
			{Todolist.length === 0 && <p className="ml-1">No items</p>}
			{Todolist.map((item) => {
				return <TodoItem {...item} />;
			})}
		</ul>
	);
}
