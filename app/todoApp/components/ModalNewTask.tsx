"use client"

import { useEffect } from "react";

type ModalNewTaskProps = {
  openModal: boolean;
  closeModal: () => void;
}

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
  }

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
      >
        <h1>
          Add New Task
        </h1>
      </div>
    </div>
  )
}