import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-700 to-red-500" />
      <p className="text-3xl text-center font-bold text-red-700 dark:text-red-400">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}
