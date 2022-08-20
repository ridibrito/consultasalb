import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'




export default function Navbar({show, setShow}) {
  const [showMenu, setShowMenu] = useState(false);
  

  const handleMenu = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }

  

  return (
    <>
    <div className="flex items-center justify-around shadow-md p-2 w-full">
      <div className="flex items-center">
        <Image src="/logofull.png" alt="logoalb" width="120" height="60" />
        <h1 className=" text-blue-500 font-normal text-3xl pt-2">Consultas</h1>
      </div>
        <ul className="items-center mt-3 hidden md:flex ">
            <Link href="/"><a className="font-normal min-w-min text-lg text-gray-500 hover:text-blue-500">Consultas</a>
            </Link>
            <Link href="/medicamentos"><a className="font-normal text-lg text-gray-500 hover:text-blue-500 ml-5">Medicamentos</a>
            </Link>
            <Link href="/historico"><a className="font-normal text-lg text-gray-500 hover:text-blue-500 ml-5">Histórico</a>
            </Link>
        </ul>
        <button className="hidden md:flex bg-blue-500 text-white font-normal mr-5 px-4 py-2 mt-3 rounded-md">Sair</button>
        <AiOutlineMenu onClick={handleMenu} className="md:hidden w-5 h-5 cursor-pointer"/>
    
      </div>


      <div
      className="bg-white md:hidden z-10 w-full h-screen "  
      style={{display:show?"flex":"none"}}
      >
        
        <ul className="flex-col pt-5">
          <AiOutlineClose onClick={handleClose} className=" ml-5 w-8 h-8 bg-gray-500 text-white rounded p-2 cursor-pointer"/>
          <Link href="/">
            <a>
              <li className="pl-40 text-lg text-gray-500">Consultas </li>
            </a>
          </Link>
          <Link href="/medicamentos">
            <a>
              <li className="pl-40 text-lg text-gray-500 pt-5">
                Medicamentos
              </li>
            </a>
          </Link>
          <Link href="/historico">
            <a>
              <li className="pl-40 text-lg text-gray-500 pt-5">Histórico </li>
            </a>
          </Link>
          <li className="pl-40 text-lg text-gray-500 pt-5">
            <button className="bg-blue-500 px-6 py-1 rounded text-white">
              Sair
            </button>
          </li>
        </ul>
      </div>

    </>
  );
}
