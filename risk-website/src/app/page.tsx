export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Welcome to the App</h1>
        <p className="text-center text-sm">
          This is a boilerplate for your Next.js application.
        </p>
      </main>
      <footer className="mt-auto text-center text-sm">
        <p>© {new Date().getFullYear()} Your App Name</p>
      </footer>
    </div>
  );
}
