import TodoItem from "./TodoItem"
import { Todo } from "../types/Todo";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="mt-10 py-7 flex items-center justify-center rounded-2xl border border-dashed border-white/75">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            No tasks yet
          </h2>
          <p className="mt-2 text-gray-500">
            Click <strong>New Task</strong> to create your first task.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}