import Navbar from "../components/navbar";
import { useState } from "react";
import Head from "next/head";

export default function Historico() {
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <>
     
        <Navbar 
        show={showMenu}
        setShow={setShowMenu}/>
       

        <div>
        <h1 className="flex justify-center text-gray-500 text-3xl pt-20">Histórico</h1>

        </div>
        </>
    )
}