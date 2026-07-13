"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

type ModalNewTaskProps = {
  openModal: boolean;
  closeModal: () => void;
};

export default function ModalNewTask({
  openModal,
  closeModal,
}: ModalNewTaskProps) {
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
        className={`w-full max-w-2xl mx-5 p-5 rounded-2xl bg-sky-500 max-h-[90vh] transform transition-all duration-300  ${
          openModal
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-5"
        }`}
      >
        <div className="flex items-center justify-between p-3">
          <h1 className="text-lg md:text-2xl font-extrabold">Add New Task</h1>
          <button
            onClick={() => closeModal()}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900 active:scale-95"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="space-y-5 py-5 px-0 md:px-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title-task"
              className="text-black font-bold text-base md:text-xl"
            >
              Title Task
            </label>
            <input
              id="title-task"
              type="text"
              placeholder="e.g. Finish the project..."
              className="w-full rounded-2xl outline-none border border-gray-200 bg-white text-black px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-white"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description-task"
              className="text-black font-bold text-base md:text-xl"
            >
              Description Task
            </label>
            <textarea
              id="description-task"
              rows={4}
              placeholder="Write your task description..."
              className="w-full resize-none rounded-2xl outline-none border border-gray-200 bg-white text-black px-4 py-3 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-white"
            />
          </div>
        </div>

        <button className="w-full bg-gray-100 text-gray-600 font-semibold px-4 py-2 my-3 rounded-xl transition-all duration-200 hover:bg-gray-200 hover:text-gray-900 active:scale-95">
          Create Task
        </button>
      </div>
    </div>
  );
}
