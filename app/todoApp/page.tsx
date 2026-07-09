import Image from "next/image";

import LogoWasnify from "@/public/logo/1.png";

export default function WasnifyTodoApp() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-sky-200 to-sky-400">
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/50 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">
        <div className="grid w-full gap-8 md:grid-cols-[380px_1fr]">
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
                <h2 className="mt-2 text-2xl font-bold text-gray-700">...</h2>

                <div className="mt-4 h-2 rounded-full bg-white">
                  <div className="h-full w-2/3 rounded-full bg-sky-800" />
                </div>
              </div>

              <div className="rounded-2xl bg-white/40 p-4">
                <p className="text-gray-600">Completed</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">...</h2>
              </div>

              <div className="rounded-2xl bg-white/40 p-4">
                <p className="text-gray-600">Remaining</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">...</h2>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
