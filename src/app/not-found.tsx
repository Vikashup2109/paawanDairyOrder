import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-20 flex flex-col items-center text-center">
      <div className="text-6xl mb-4">🐄</div>
      <h1 className="font-display font-900 text-2xl text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-gray-400 text-sm">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 bg-primary text-white px-8 py-3 rounded-2xl font-display font-800">
        Go Home
      </Link>
    </div>
  );
}
