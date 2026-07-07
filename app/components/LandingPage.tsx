export default function LandingPage() {
  return (
    <section className="relative flex flex-col min-h-screen bg-linear-to-b from-white to-sky-300">
      <header className="mx-auto flex w-full max-w-7xl px-8 py-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-sky-500">
          Wasnify
        </h1>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-gray-900 font-extrabold text-4xl md:text-7xl leading-tight tracking-tight">
            Stay Organized,
            <br />
            Stay Creative.
          </h1>
          <p className="mt-4 md:mt-8 max-w-2xl text-md md:text-xl text-gray-600 leading-8">
            Join millions of people to capture ideas, organize life, and turn
            every task into meaningful progress.
          </p>
        </div>
      </div>
    </section>
  );
}
