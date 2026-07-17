"use client";

import { useEffect, useState } from "react";
import { FaTimes, FaCalendarAlt } from "react-icons/fa";

type ModalNewTaskProps = {
  openModal: boolean;
  closeModal: () => void;
};

export default function ModalNewTask({
  openModal,
  closeModal,
}: ModalNewTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Work");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 z-20 flex items-center justify-center transition-all duration-300 ${
        openModal
          ? "bg-black/70 opacity-100 visible"
          : "bg-black/0 opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-2xl max-h-[90vh] mx-5 p-5 rounded-2xl overflow-y-auto bg-sky-500 transform transition-all duration-300  ${
          openModal
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-5"
        }`}
      >
        <div className="flex items-center justify-between p-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-2xl font-extrabold">Add New Task</h1>
            <p className="text-sm opacity-75">
              Create a new task for your project
            </p>
          </div>
          <button
            onClick={() => closeModal()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900 active:scale-95"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="space-y-7 py-5">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="title-task"
              className="text-black font-bold text-base md:text-xl"
            >
              Title Task
            </label>
            <input
              id="title-task"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Finish the project..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-black outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-white"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="description-task"
              className="text-black font-bold text-base md:text-xl"
            >
              Description Task
            </label>
            <textarea
              id="description-task"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your task description..."
              className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-black outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-white"
            />
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="priority"
                className="text-black font-bold text-base md:text-xl"
              >
                Priority
              </label>

              <select
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-white"
              >
                <option value="Low">🟢 Low</option>
                <option value="Medium">🟡 Medium</option>
                <option value="High">🔴 High</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="due-date"
                className="text-black font-bold text-base md:text-xl"
              >
                Due Date
              </label>

              <div className="relative">
                <FaCalendarAlt
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                />

                <input
                  id="due-date"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 py-3 text-black outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-white"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="category"
              className="text-black font-bold text-base md:text-xl"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-black outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-white"
            >
              <option value="Work">💼 Work</option>
              <option value="Study">📚 Study</option>
              <option value="Personal">🏠 Personal</option>
            </select>
          </div>
        </div>

        <button className="w-full bg-gray-100 text-gray-600 font-semibold px-4 py-2 my-3 rounded-xl transition-all duration-200 hover:bg-gray-200 hover:text-gray-900 active:scale-95">
          Create Task
        </button>
      </div>
    </div>
  );
}
