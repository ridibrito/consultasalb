import Navbar from "../components/navbar";
import { BsArrowRight } from 'react-icons/bs'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="flex bg-gray-300 h-40 justify-center text-white text-3xl p-5">
        Consultas
      </h1>

      <div>
        <div className="ml-5 -mt-20 bg-gradient-to-r from-cyan-500 to-blue-500 w-80 h-full rounded-md px-6 py-5 shadow-lg">
          <div className="overflow-hidden relative w-10 h-10 bg-blue-100 rounded-full dark:bg-gray-600">
            <Image src="/foto capa.png" alt="avatar" layout="fill" />
          </div>
          <div className="flex items-center justify-between">
            <div>
            <h2 className="text-white text-lg font-semibold mt-2">Ricardo Albuquerque</h2>
            <p className="text-white text-sm">Plano de saúde: Unimed CNU</p>
            </div>
            <BsArrowRight className="mr-3 w-10 h-5 text-white"/>
          </div>
        </div>
      </div>
    </>
  );
}
