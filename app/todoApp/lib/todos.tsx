import { Todo } from "../types/Todo";

const STORAGE_KEY = "wasnify-todos";

export function getTodos(): Todo[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}