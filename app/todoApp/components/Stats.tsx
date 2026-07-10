import Image from "next/image";

import { Todo } from "../types/Todo";

import LogoWasnify from "@/public/logo/1.png";

interface StatsTodoAppProps {
  todos: Todo[];
}

export default function StatsTodoApp({ todos }: StatsTodoAppProps) {
  const completed = todos.filter((todo) => todo.completed).length;

  const remaining = todos.length - completed;

  const todayProgress =
    todos.length === 0 ? 0 : Math.round((completed / todos.length) * 100);

  return (
    <aside className="rounded-3xl border border-white/30 bg-white/25 p-6 backdrop-blur-2xl shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="flex w-12 h-12 items-center justify-center overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={LogoWasnify}
            alt="Logo Wasnify"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-gray-800 text-xl">Wasnify</h1>
          <p className="text-xs text-gray-600">Todo App</p>
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full rounded-2xl bg-sky-500 py-3 font-medium text-white transition hover:bg-sky-600">
          + New Task
        </button>
      </div>

      <div className="mt-8 space-y-3">
        <div className="rounded-2xl bg-white/50 p-4">
          <p className="text-sm text-gray-500">Today's Progress</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-700">
            {todayProgress}
          </h2>

          <div className="mt-4 h-2 rounded-full bg-white">
            <div
              className="h-full rounded-full bg-sky-800 transition-all duration-300"
              style={{ width: `${todayProgress}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white/40 p-4">
          <p className="text-gray-600">Completed</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-700">{completed}</h2>
        </div>

        <div className="rounded-2xl bg-white/40 p-4">
          <p className="text-gray-600">Remaining</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-700">{remaining}</h2>
        </div>
      </div>
    </aside>
  );
}
