import Image from "next/image";
import Link from "next/link";
//@ts-ignore why doesn't it recognize the logo??
import Logo from "../assets/logo.svg";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center content-center text-center">
      <Image
        priority
        src={Logo}
        alt="Follow us on Twitter"
        className="h-64 w-64"
      />
      <h1 className="mb-4 text-5xl font-bold">Nebula Services</h1>
      <p className="text-fd-muted-foreground italic text-2xl">Passion, skill</p>
      <div className="flex flex-row gap-3">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Start Here
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          NebulaWeb Setup Guide
        </button>
      </div>
    </main>
  );
}
