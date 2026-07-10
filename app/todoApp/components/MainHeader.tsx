export default function MainHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17) {
    greeting = "Good Evening";
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-800">{greeting} 👋🏻</h1>
        <p className="text-gray-600">Let's make today productive.</p>
      </div>
      <input
        type="text"
        placeholder="Search Task..."
        className="w-full rounded-2xl border border-white/40 bg-white/50 px-5 py-3 outline-none transition focus:border-sky-400 md:w-80 text-black"
      />
    </div>
  );
}
