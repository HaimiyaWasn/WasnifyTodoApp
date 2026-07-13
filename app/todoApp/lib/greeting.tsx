export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "🌅 Good Morning";
  }

  if (hour < 17) {
    return "☀️ Good Afternoon";
  }

  return "🌇 Good Evening";
}