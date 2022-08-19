import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <>
    <div className="flex items-center justify-around shadow">
      <div className="flex items-center ml-5 p-2">
        <Image src="/logofull.png" alt="logoalb" width="120" height="60" />
        <h1 className=" text-blue-500 font-normal text-3xl pt-2">Consultas</h1>
      </div>
        <ul className="flex items-center mt-3">
            <Link href="/"><a className="font-normal text-lg text-gray-500 hover:text-blue-500">consultas</a>
            </Link>
            <Link href="/medicamentos"><a className="font-normal text-lg text-gray-500 hover:text-blue-500 ml-5">medicamentos</a>
            </Link>
            <Link href="/historico"><a className="font-normal text-lg text-gray-500 hover:text-blue-500 ml-5">histórico</a>
            </Link>
        </ul>
        <button className="bg-blue-500 text-white font-normal mr-5 px-4 py-2 rounded-md">Sair</button>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only"></span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
    
      </div>
    </>
  );
}
