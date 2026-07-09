export default function DecorationBackgroundBlur() {
  return (
    <>
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/50 blur-3xl" />
    </>
  );
}
