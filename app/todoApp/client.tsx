"use client";

import { useState, useEffect } from "react";

import { Todo } from "./types/Todo";
import { getTodos } from "./lib/todos";

import StatsTodoApp from "./components/Stats";
import DecorationBackgroundBlur from "./components/DecorationBackgroundBlur";
import MainHeader from "./components/MainHeader";
import TodoList from "./components/TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-200 to-sky-400">
      <DecorationBackgroundBlur />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">
        <div className="grid w-full gap-8 md:grid-cols-[380px_1fr]">
          <StatsTodoApp todos={todos} />

          <main className="rounded-3xl border border-white/30 bg-white/25 p-8 backdrop-blur-2xl shadow-2xl">
            <MainHeader />
            <TodoList todos={todos} />
          </main>
        </div>
      </div>
    </section>
  );
}
